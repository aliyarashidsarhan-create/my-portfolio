import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-portfolio';
}
//1-What is the purpose of the src/app/ folder? 
// The src/app/ folder contains the main application code.
// It usually includes components, modules, services, and other files
// that build the core functionality of the Angular application.

//2-What does app.component.ts contain? 
// app.component.ts contains the main root component of the application.
// It defines the logic, selector, template, and styles for the main app view.

//3- What is the role of app.module.ts? 
// app.module.ts is the root module of the Angular application.
// It declares components and imports other modules needed for the app to run.

//4-Where would you add global CSS styles? 
// Global CSS styles are added in the src/styles.css file.
// These styles apply to the entire Angular application.

//5-What does angular.json control? 
// angular.json controls the configuration of the Angular project.
// It defines build settings, project structure, assets, styles, and scripts.