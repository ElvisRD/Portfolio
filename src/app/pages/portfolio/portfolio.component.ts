import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { CardExperienceComponent } from '../../components/card-experience/card-experience.component';
import {experience} from '../../../../public/data/experience.json'


@Component({
  selector: 'app-portfolio',
  imports: [TranslatePipe, CardExperienceComponent, ],
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
  experienceList = experience;
}
