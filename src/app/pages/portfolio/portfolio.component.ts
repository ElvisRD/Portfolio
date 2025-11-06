import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { CardExperienceComponent } from '../../components/card-experience/card-experience.component';
import { cv } from '../../../../public/data/experience.json';
import { proyects } from '../../../../public/data/proyects.json';
import { mySkills } from '../../../../public/data/skills.json'
import { CardProyectsComponent } from '../../components/card-proyects/card-proyects.component';
import { CardSkillsComponent } from '../../components/card-skills/card-skills.component';

@Component({
  selector: 'app-portfolio',
  imports: [TranslatePipe, CardExperienceComponent, CardProyectsComponent, CardSkillsComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  
})
export class PortfolioComponent {
  @ViewChild('selected') selected!: ElementRef;
  @ViewChild('buttonsGroup') buttonsGroup!: ElementRef;

  constructor(private renderer: Renderer2) {}

  networks = [
    {
      icon: 'pi pi-instagram',
      url: '',
    },
    {
      icon: 'pi pi-telegram',
      url: '',
    },
    {
      icon: 'pi pi-linkedin',
      url: '',
    },
    {
      icon: 'pi pi-github',
      url: '',
    },
  ];
  experienceList = cv;
  allProyects = proyects;
  allSkills = mySkills;
  typesProyects = [
    { name: 'All' },
    { name: 'Front' },
    { name: 'Back' },
    { name: 'Design' },
  ];

  ngOnInit(){
    console.log(this.allSkills);
    
  }

  selectedType(position: number) {
    const divElement: HTMLElement = this.selected.nativeElement;
    const divButtonsGroup: HTMLElement = this.buttonsGroup.nativeElement;
    let translationX = 0;
    
    const containerRect = divButtonsGroup.getBoundingClientRect();
    
    const buttons = divButtonsGroup.querySelectorAll('button');
    const targetButton = buttons[position];

    const targetRect = targetButton.getBoundingClientRect();

    let targetWidth = targetRect.width;

    translationX = targetRect.left - containerRect.left; 

    if (position !== 0) {
      translationX -= 2; 
    }

    this.renderer.setStyle(divElement, 'width', `${targetWidth}px`);
    this.renderer.setStyle(divElement, 'transform', `translateX(${translationX}px)`);

  }
}
