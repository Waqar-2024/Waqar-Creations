import { Component, } from '@angular/core';
import { HeaderComponent } from '../../shared/reuseablecomponent/header/header.component';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SkillSectionComponent } from './skill-section/skill-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,MatCardModule,MatButtonModule,MatIconModule,SkillSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}