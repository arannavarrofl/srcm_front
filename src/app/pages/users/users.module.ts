import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import {FormsModule} from '@angular/forms';
import { FormUserComponent } from './form-user/form-user.component';

@NgModule({
  declarations: [
    UsersComponent,
    FormUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule
  ]
})
export class UsersModule { }
