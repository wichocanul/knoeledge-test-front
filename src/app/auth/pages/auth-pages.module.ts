import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthMainComponent } from './auth-main/auth-main.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AuthMainComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthPagesModule { }
