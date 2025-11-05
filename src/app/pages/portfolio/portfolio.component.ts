import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { CardExperienceComponent } from '../../components/card-experience/card-experience.component';
import {cv} from '../../../../public/data/experience.json'
import {proyects} from '../../../../public/data/proyects.json'
import { CardProyectsComponent } from '../../components/card-proyects/card-proyects.component';


@Component({
  selector: 'app-portfolio',
  imports: [TranslatePipe, CardExperienceComponent, CardProyectsComponent],
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
  experienceList = cv;
  allProyects = proyects;
  typesProyects = [
    {name: 'All'},
    {name: 'Front'},
    {name: 'Back'},
    {name: 'Design'},
  ]
  typeSelected = 'All';


  selectedType(position: number){
    this.typeSelected = this.typesProyects[position].name;
    
  }

}
