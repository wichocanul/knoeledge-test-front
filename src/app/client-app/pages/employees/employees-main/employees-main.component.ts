import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployedCreate, EmployedResponse } from 'src/app/client-app/interfaces/employees-interface';
import { EmployeesService } from 'src/app/client-app/services/employees.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employees-main',
  templateUrl: './employees-main.component.html',
  styleUrls: ['./employees-main.component.css']
})
export class EmployeesMainComponent {

  employedCurrent: EmployedCreate = {
    'birthdate': '',
    'email': '',
    'name': '',
    'phone': '',
    'proceedings': 0,
    'rfc': ''
  }
  idCurrent: number = 0;
  editForm: FormGroup = this.fb.group({
    proceedings   : ['', [Validators.required] ],
    name: ['', [Validators.required] ],
    birthdate: ['', [Validators.required]],
    rfc: ['', [Validators.required]],
    email: ['', [Validators.required]],
    phone: ['', [Validators.required]]
  });
  employees: EmployedResponse[] = [];
  statusWindow: boolean = false;
  @ViewChild('asModalWindow') modalWindow! : ElementRef;

  constructor( private empService: EmployeesService,
               private render2: Renderer2,
               private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.getEmployees();
  }

  addEmployed(data: any) {
    console.log(data)
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
              this.getEmployees();
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
    })
  }

  statusModal(employed?: EmployedCreate) {

    if(this.employedCurrent) {

      this.employedCurrent = {
        'proceedings': employed?.proceedings!,
        'birthdate': employed?.birthdate!,
        'email': employed?.email!,
        'name': employed?.name!,
        'phone': employed?.phone!,
        'rfc': employed?.rfc!
      }

      employed ? this.idCurrent = employed!.id! : this.idCurrent = 0;

    }

    const status = this.modalWindow.nativeElement;

    if(this.statusWindow) {
      this.render2.addClass(status, 'hidden');
      this.render2.removeClass(status, 'modalWindow');
      this.statusWindow = false;
    } else {
      this.render2.removeClass(status, 'hidden');
      this.render2.addClass(status, 'modalWindow');
      this.statusWindow = true;
    }
  }

  editEmployed() {

    if(this.editForm.invalid) {
      return;
    }

    this.empService.edit(this.employedCurrent, this.idCurrent)
      .subscribe({
        next: (resp) => {
          Swal.fire({
            icon: 'success',
            title: 'Actualizacion exitosa',
            text: 'El empleado fue actualizado',
          })
          this.render2.addClass(this.modalWindow.nativeElement, 'hidden');
          this.render2.removeClass(this.modalWindow.nativeElement, 'modalWindow');
          this.statusWindow = false;
          this.getEmployees();
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

}
