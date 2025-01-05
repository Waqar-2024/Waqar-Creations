import { Component, HostListener } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatDrawer } from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,MatToolbarModule, MatButtonModule, MatIconModule,MatDrawer,MatSidenavModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
menuDisplay:Boolean=true

ngOnInit(): void {
  // Check window width on component initialization
  if (window.innerWidth < 700) {
    this.menuDisplay = false; // Hide menu on small screens
  }
}

 // Listen for window resize events
 @HostListener('window:resize', ['$event'])
 onResize(event:any) {
  if (event.target.innerWidth < 700) {
    this.menuDisplay = false; // Hide menu on small screens
  } else {
    this.menuDisplay = true; // Show menu on larger screens
  }
}
}
