import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  downloadFile() {
    const link = document.createElement('a');
    link.href = './assets/Oscar_Tideman_CV.pdf';
    link.download = 'Oscar_Tideman_CV.pdf';
    link.click();
  }


}
