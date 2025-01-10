import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-developer-intro',
  standalone: true,
  imports: [MatCardModule,MatIconModule],
  templateUrl: './developer-intro.component.html',
  styleUrl: './developer-intro.component.css'
})
export class DeveloperIntroComponent {

}
 