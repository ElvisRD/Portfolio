import { Component, Input } from '@angular/core';
import { provideIcons, NgIcon } from '@ng-icons/core';
import { ionDesktopOutline, ionPhonePortraitOutline, ionCodeSlash} from '@ng-icons/ionicons'


@Component({
  selector: 'app-card-services',
  imports: [NgIcon],
  templateUrl: './card-services.component.html',
  styleUrl: './card-services.component.scss',
  providers: provideIcons({ionDesktopOutline, ionPhonePortraitOutline, ionCodeSlash})
})
export class CardServicesComponent {
@Input() service : any;
}
