import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-skills',
  imports: [],
  templateUrl: './card-skills.component.html',
  styleUrl: './card-skills.component.scss'
})
export class CardSkillsComponent {
  @Input() tecnology: any;

}
