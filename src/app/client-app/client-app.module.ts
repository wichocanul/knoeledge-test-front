import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientAppRoutingModule } from './client-app-routing.module';
import { ClientAppMainComponent } from './pages/client-app-main/client-app-main.component';


@NgModule({
  declarations: [
    ClientAppMainComponent
  ],
  imports: [
    CommonModule,
    ClientAppRoutingModule
  ]
})
export class ClientAppModule { }
