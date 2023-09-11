import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  user: string = '';

  constructor( private authService: AuthService,
               private router     : Router,
  ) {}

  ngOnInit() {
    localStorage.getItem('user') ? this.user = localStorage.getItem('user')! : '';
  }

  singOff() {

    this.authService.singOff()
      .subscribe({
        next: resp => {
          console.log(resp)
          this.router.navigateByUrl('/auth');
        },
        error: err => {
          console.log('error: ', err)
        }
      })

  }

}
