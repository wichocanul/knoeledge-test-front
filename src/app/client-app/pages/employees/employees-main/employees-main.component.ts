import { Component } from '@angular/core';
import { EmployedResponse } from 'src/app/client-app/interfaces/employees-interface';
import { EmployeesService } from 'src/app/client-app/services/employees.service';
import Swal from 'sweetalert2';

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

  delete(id: number, name: string) {
    Swal.fire({
      title: `Deseas eliminar al usuario ${name}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if(result.isConfirmed) {
        this.empService.delete(id)
          .subscribe({
            next: () => {
              Swal.fire(
                'Eliminado!',
                'El usuario ha sido eliminado',
                'success'
              );
            },
            error: () => {
              Swal.fire(
                'Fallo!',
                'El usuario no se pudo eliminar, intente más tarde',
                'error'
              );
            }
          })
      }
      this.getEmployees();
    })
  }

}
