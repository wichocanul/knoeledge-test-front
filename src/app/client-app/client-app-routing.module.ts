import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientAppMainComponent } from './pages/client-app-main/client-app-main.component';
import { EmployeesComponent } from './pages/employees/employees.component';

const routes: Routes = [
  {
    path: '',
    component: ClientAppMainComponent,
    children: [
      {
        path: 'home',
        component: EmployeesComponent
      },
      {
        path: '',
        component: EmployeesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientAppRoutingModule { }
