import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hiring-options',
  standalone: true,
  imports: [MatCardModule,MatIconModule],
  templateUrl: './hiring-options.component.html',
  styleUrl: './hiring-options.component.css'
})
export class HiringOptionsComponent {
 
}
