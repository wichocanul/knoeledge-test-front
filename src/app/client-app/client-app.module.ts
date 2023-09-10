import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientAppRoutingModule } from './client-app-routing.module';
import { ClientAppMainComponent } from './pages/client-app-main/client-app-main.component';
import { SharedModule } from './shared/shared.module';
import { EmployeesComponent } from './pages/employees/employees.component';


@NgModule({
  declarations: [
    ClientAppMainComponent,
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    ClientAppRoutingModule,
    SharedModule
  ]
})
export class ClientAppModule { }
