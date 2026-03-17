import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  isLoggedIn = false;

  skills:string[]=[ 'Angular', 'TypeScript', 'HTML', 'CSS'];

  userRole = 'viewer'; // try: admin | editor | viewer

   toggleLogin() { 
    this.isLoggedIn = !this.isLoggedIn;
  } 
}
