import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 studentName="Aliya"
 profileImage="./assets/4.jpg"
 isDisabled = true
 message = ''
onButtonClick() {
this.message = 'Button was clicked!';
}

}
