import { Component } from '@angular/core';
import { UserFormComponent } from "./components/user-form/user-form.component";



@Component({
  selector: 'app-root',
  imports: [ UserFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'newForm';
}
