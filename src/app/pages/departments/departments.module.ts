import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from './departments.component';
import { DepartmentComponent } from './department/department.component';
import { MaterialModule } from 'src/app/material.module';
import {FormsModule} from '@angular/forms';
import{SharedModule} from '../../shared/shared.module';
import { FormDepartmentComponent } from './form-department/form-department.component';


@NgModule({
  declarations: [
    DepartmentsComponent,
    DepartmentComponent,
    FormDepartmentComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule 
  ]
})
export class DepartmentsModule { }
