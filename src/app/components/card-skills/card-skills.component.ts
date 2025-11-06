import { Component, Input } from '@angular/core';
import { provideIcons, NgIcon } from '@ng-icons/core';
import { svglAngular, svglReact, svglJavascript, svglCss, svglTailwindcss, svglBootstrap, svglTypescript, svglNodejs, svglNestjs, svglSpring, svglPrismaDark, svglMysql, svglPostgresql, svglDocker, svglGit, svglFigma, svglPostman, svglGithubDark } from '@ng-icons/svgl';

@Component({
  selector: 'app-card-skills',
  imports: [NgIcon],
  templateUrl: './card-skills.component.html',
  styleUrl: './card-skills.component.scss',
  providers: provideIcons({ svglAngular, svglReact, svglJavascript, svglCss, svglTailwindcss, svglBootstrap, svglTypescript, svglNodejs, svglNestjs, svglSpring, svglPrismaDark, svglMysql, svglPostgresql, svglDocker, svglGit, svglFigma, svglPostman, svglGithubDark })
})
export class CardSkillsComponent {
  @Input() tecnology: any;

}
