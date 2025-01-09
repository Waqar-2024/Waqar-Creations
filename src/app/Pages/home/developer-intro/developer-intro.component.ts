import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HiringOptionsComponent } from '../hiring-options/hiring-options.component';

@Component({
  selector: 'app-developer-intro',
  standalone: true,
  imports: [MatCardModule,MatIconModule,HiringOptionsComponent],
  templateUrl: './developer-intro.component.html',
  styleUrl: './developer-intro.component.css'
})
export class DeveloperIntroComponent {

}
 