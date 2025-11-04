import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  device: string = '';
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
      const height = window.innerHeight;

      if(width <= 640){
        this.device = 'phone';
        this.isOpen = false;
      }else if(width <= 768){
        this.device = 'tablet';
        this.isOpen = true;
      }else{
        this.device = 'desktop';
        this.isOpen = true;
      }
  }

  openMenu(): void {
    this.isOpen = !this.isOpen;
  }


}
