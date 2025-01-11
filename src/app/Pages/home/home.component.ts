import { Component, } from '@angular/core';
import { HeaderComponent } from '../../shared/reuseablecomponent/header/header.component';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SkillSectionComponent } from './skill-section/skill-section.component';
import { DeveloperIntroComponent } from './developer-intro/developer-intro.component';
import { HiringOptionsComponent } from './hiring-options/hiring-options.component';
import { FooterComponent } from '../../shared/reuseablecomponent/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,MatCardModule,MatButtonModule,MatIconModule,
  SkillSectionComponent,DeveloperIntroComponent,HiringOptionsComponent,FooterComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}