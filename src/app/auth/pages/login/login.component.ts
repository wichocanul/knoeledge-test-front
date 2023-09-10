import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email] ],
    password: ['', [Validators.required]]
  })

  constructor( private fb: FormBuilder) {}

  login() {
    if(this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value)
  }

}
