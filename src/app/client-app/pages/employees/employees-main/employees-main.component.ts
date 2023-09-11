import { Component } from '@angular/core';
import { EmployedResponse } from 'src/app/client-app/interfaces/employees-interface';
import { EmployeesService } from 'src/app/client-app/services/employees.service';

@Component({
  selector: 'app-employees-main',
  templateUrl: './employees-main.component.html',
  styleUrls: ['./employees-main.component.css']
})
export class EmployeesMainComponent {

  employees: EmployedResponse[] = [];

  constructor( private empService: EmployeesService ) {}

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.empService.getAllEmployees()
      .subscribe({
        next: (resp) => {
          this.employees = resp;
        },
        error: (err) => {
          console.log(err)
        }
      })
  }

}
