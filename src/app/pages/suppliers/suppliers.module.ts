import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersRoutingModule } from './suppliers-routing.module';
import { SuppliersComponent } from './suppliers.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';
import { FormSuppliersComponent } from './form-suppliers/form-suppliers.component';


@NgModule({
  declarations: [
    SuppliersComponent,
    FormSuppliersComponent
    
  ],
  imports: [
    CommonModule,
    SuppliersRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule
  ]
})
export class SuppliersModule { }
