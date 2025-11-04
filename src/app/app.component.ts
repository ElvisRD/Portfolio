import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, TranslatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  networks = [
    {
      icon: 'pi pi-instagram',
      url: ''
    },
    {
      icon: 'pi pi-telegram',
      url: ''
    },
    {
      icon: 'pi pi-linkedin',
      url: ''
    },
    {
      icon: 'pi pi-github',
      url: ''
    }
  ]
}
