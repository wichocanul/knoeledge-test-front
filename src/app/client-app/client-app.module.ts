import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientAppRoutingModule } from './client-app-routing.module';
import { ClientAppMainComponent } from './pages/client-app-main/client-app-main.component';
import { SharedModule } from './shared/shared.module';
import { EmployeesMainComponent } from './pages/employees/employees-main/employees-main.component';


@NgModule({
  declarations: [
    ClientAppMainComponent,
    EmployeesMainComponent
  ],
  imports: [
    CommonModule,
    ClientAppRoutingModule,
    SharedModule
  ]
})
export class ClientAppModule { }
