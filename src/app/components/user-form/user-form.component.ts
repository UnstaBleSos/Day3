import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators, FormControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-user-form',
  // imports: [FormsModule],
  standalone: true,
  imports:[ReactiveFormsModule, CommonModule, NgIf],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
   profile = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl("",[Validators.email,Validators.required]),
    password: new FormControl('',[Validators.required,Validators.min(8)])
   })

  handleLogin(){
   
    console.log("HELLO",this.profile.value)

  }

}
