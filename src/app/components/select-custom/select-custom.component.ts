import { Component, Input, forwardRef} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select-custom',
  imports: [],
  templateUrl: './select-custom.component.html',
  styleUrl: './select-custom.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectCustomComponent),
      multi: true
    }
  ]
})
export class SelectCustomComponent implements ControlValueAccessor {
  @Input() options: { value: string, label: string }[] = [];

  selectedOption: any = { value: 'web', label: 'Aplicación web'};
  lavelSelected: string = '';
  isOpen: boolean = false;
  onTouched = () => {};

  // Funciones necesarias para ControlValueAccessor
  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(value: any): void {
    if (value !== undefined) {
      this.selectedOption.value = value;
      const seleccion = this.options.find(o => o.value === value);
      this.selectedOption.label = seleccion ? seleccion.label : 'Seleccione...';
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  // Lógica de selección
  selected(opcion: { value: string, label: string }): void {
    this.selectedOption.value = opcion.value;
    this.selectedOption.label = opcion.label;
    this.onChange(opcion.value); // Notifica al FormControl
    this.isOpen = false;
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
    this.onTouch();
  }

  closeDropdown(): void {
    setTimeout(() => {
      this.isOpen = false;
      this.onTouched(); 
    }, 0);
  }
}
