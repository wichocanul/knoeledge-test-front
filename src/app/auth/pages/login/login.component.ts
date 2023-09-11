import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup = this.fb.group({
    email   : ['wicho2@gmail.com', [Validators.required, Validators.email] ],
    password: ['hola1234', [Validators.required] ]
  });

  constructor( private fb: FormBuilder ,
               private authService: AuthService,
               private router     : Router,
  ) {}

  login() {
    const { email, password } = this.loginForm.value;

    if(this.loginForm.invalid) {
      return;
    }

    this.authService.login( email, password )
      .subscribe({
        next: resp => {
          console.log(resp);
          this.router.navigateByUrl('/kt');
        },
        error: err => {
          console.log(err);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error, verifica los datos',
          })
        }
      })
  }

}
