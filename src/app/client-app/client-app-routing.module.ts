import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientAppMainComponent } from './pages/client-app-main/client-app-main.component';
import { EmployeesMainComponent } from './pages/employees/employees-main/employees-main.component';

const routes: Routes = [
  {
    path: '',
    component: ClientAppMainComponent,
    children: [
      {
        path: 'home',
        component: EmployeesMainComponent
      },
      {
        path: '',
        component: EmployeesMainComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientAppRoutingModule { }
