import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  @Output() closeSideBar = new EventEmitter  /* hold the side bar from parent */

  closeNav() {
    this.closeSideBar.emit() // call the parent method for close sidenavbar component
  }
}
