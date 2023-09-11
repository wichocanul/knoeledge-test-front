import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientAppRoutingModule } from './client-app-routing.module';
import { ClientAppMainComponent } from './pages/client-app-main/client-app-main.component';
import { SharedModule } from './shared/shared.module';
import { EmployeesMainComponent } from './pages/employees/employees-main/employees-main.component';
import { CreateComponent } from './pages/employees/create/create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClientAppMainComponent,
    EmployeesMainComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    ClientAppRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ClientAppModule { }
