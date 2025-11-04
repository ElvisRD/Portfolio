import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-experience',
  imports: [],
  templateUrl: './card-experience.component.html',
  styleUrl: './card-experience.component.scss'
})
export class CardExperienceComponent {
  @Input() data: any

}
