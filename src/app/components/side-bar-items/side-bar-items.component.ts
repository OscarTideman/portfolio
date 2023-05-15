import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar-items',
  templateUrl: './side-bar-items.component.html',
  styleUrls: ['./side-bar-items.component.css']
})
export class SideBarItemsComponent {

  @Input() text: string | undefined; //Name of the link
  @Input() pageComponent: string | undefined; //Name of the link
  @Input() Icon: string | undefined; //Name of the link



  constructor() {

  }
}
