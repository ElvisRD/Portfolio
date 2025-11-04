import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-portfolio',
  imports: [TranslatePipe],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
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
