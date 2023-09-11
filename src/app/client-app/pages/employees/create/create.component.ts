import { Component, ElementRef, EventEmitter, Output, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployedCreate } from 'src/app/client-app/interfaces/employees-interface';
import { EmployeesService } from 'src/app/client-app/services/employees.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  createForm: FormGroup = this.fb.group({
    proceedings   : ['201626971', [Validators.required] ],
    name: ['wicho 1', [Validators.required] ],
    birthdate: ['', [Validators.required]],
    rfc: ['asdfghjkl1234', [Validators.required]],
    email: ['example@gmail.com', [Validators.required]],
    phone: ['2222761817', [Validators.required]]
  });

  statusWindow: boolean = false;

  @ViewChild('asModalWindow') modalWindow! : ElementRef;

  constructor( private fb: FormBuilder,
               private render2: Renderer2,
               private empService: EmployeesService
  ) {}

  ngOnInit() {
  }

  statusModal() {
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

  registerEmployed() {

    let employed: EmployedCreate = {
      'proceedings': this.createForm.value['proceedings'],
      'name': this.createForm.value['name'],
      'birthdate': this.createForm.value['birthdate'],
      'rfc': this.createForm.value['rfc'],
      'email': this.createForm.value['email'],
      'phone': this.createForm.value['phone']
    }

    if(this.createForm.invalid) {
      return;
    }

    this.empService.create(employed)
      .subscribe({
        next: (resp) => {
          console.log(resp)
          Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            text: 'El empleado fue registrado',
          })
          this.render2.addClass(this.modalWindow.nativeElement, 'hidden');
          this.render2.removeClass(this.modalWindow.nativeElement, 'modalWindow');
          this.statusWindow = false;
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

}
