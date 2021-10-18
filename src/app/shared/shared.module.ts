import { NgModule } from "@angular/core";
import { AlertComponent } from './components/alert/alert.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component'
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';  

@NgModule({
    declarations: [AlertComponent, ConfirmDialogComponent],
    imports:[MaterialModule, CommonModule],
    exports: [AlertComponent, ConfirmDialogComponent]
})
export class SharedModule{}
