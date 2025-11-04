import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isOpen: boolean = false;

  ngOnInit(): void {
    this.checkDevice();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkDevice();
  } 

  checkDevice(): void {
      const width = window.innerWidth;

      this.isOpen = width <= 640 ? false : true; 
  }

  openMenu(): void {
    this.isOpen = !this.isOpen;
  }


}
