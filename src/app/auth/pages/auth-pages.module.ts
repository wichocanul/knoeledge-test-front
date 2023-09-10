import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthMainComponent } from './auth-main/auth-main.component';
import { LoginComponent } from './login/login.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthMainComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AuthPagesModule {}
