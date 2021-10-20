import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { Supplier } from '../interfaces/supplier.interface';
import { SuppliersService } from '../services/suppliers.service';

@Component({
  selector: 'app-form-suppliers',
  templateUrl: './form-suppliers.component.html',
  styleUrls: ['./form-suppliers.component.css']
})
export class FormSuppliersComponent implements OnInit {

  title:string;
  edit:boolean;

  supplier:Supplier = {
    supplierID:"",
    supplierName: "" ,
    companyName:"",
    rfc: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
  };

  constructor(private suppliersService: SuppliersService,private dialogRef:MatDialogRef<FormSuppliersComponent>,
    private dialog:MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) { 
        this.title="";
        this.edit=false;
    }//constructor

  ngOnInit(): void {
    if (this.data == null) {
      this.title = "Nuevo proveedor";     
    }
    else {
      this.title = "Editar proveedor";
      this.supplier=this.data;
      this.edit = true;
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  saveSupplier(){
    let respuesta:any = { message: "" };
      if(this.edit){
        const supplierID = this.supplier.supplierID+"";
    
        this.suppliersService.updateSupplier(supplierID,this.supplier).subscribe(
          res=>{
            respuesta = res; 
            this.onClose();      
            this.dialog.open(AlertComponent, {
              width: '400px',
              data: { 'title': 'Guardado', 'type': 'success', 'message': respuesta.message }
            });
          },
          err =>{
            console.log(err);       
          }
        );
      } //Agregar
      else{
        delete this.supplier.supplierID;
            this.suppliersService.saveSupplier(this.supplier).subscribe(
            res=>{
              respuesta = res; 
              this.onClose();      
              this.dialog.open(AlertComponent, {
                width: '400px',
                data: { 'title': 'Guardado', 'type': 'success', 'message': respuesta.message }
              });
            },
            err =>{
               console.log(err);       
            }
          );
        
      } //else     
  }//saveSupplier

}
