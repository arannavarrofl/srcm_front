import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { MaterialModule } from 'src/app/material.module';
import { FormRoleComponent } from './form-role/form-role.component';
import{SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    RolesComponent,
    FormRoleComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule
  ]
})
export class RolesModule { }
