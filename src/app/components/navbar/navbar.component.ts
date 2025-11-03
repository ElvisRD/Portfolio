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

      if(width <= 480){
        this.device = 'phone';
      }else if(width > 480 && width <= 768){
        this.device = 'tablet';
      }else{
        this.device = 'desktop';
      }
  }

  openMenu(): void {
    this.isOpen = !this.isOpen;
  }


}
