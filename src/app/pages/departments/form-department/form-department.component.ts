import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import{Department} from '../interfaces/department.interface';
import{DepartmentsService} from '../services/departments.service';
import{AlertComponent} from '../../../shared/components/alert/alert.component';


@Component({
  selector: 'app-form-department',
  templateUrl: './form-department.component.html',
  styleUrls: ['./form-department.component.css']
})
export class FormDepartmentComponent implements OnInit {
  title:string;
  dept:Department = {
    deptID:0,
    deptName: ""
  };

  constructor(private deptsService: DepartmentsService,private dialogRef:MatDialogRef<FormDepartmentComponent>,
    private dialog:MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) { 
        this.title="";
    }//constructor

  ngOnInit(): void {
    if (this.data == null) {
      this.title = "Nueva categoría";     
    }
    else {
      this.title = "Editar categoría";
      this.dept=this.data;
    }
  }//ngOnInit


  saveDepartment(){
  let respuesta:any = { message: "" };
  if(this.dept.deptID==0){
        delete this.dept.deptID;
        this.deptsService.saveDepartment(this.dept).subscribe(
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
    let deptID = this.dept.deptID+""; 
 
    this.deptsService.updateDepartment(deptID,this.dept).subscribe(
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
  } 
  //if(this.dept.deptID)

   
  }
  

  onClose() {
    //this.categoryService.selectedCategory = new Category();
    this.dialogRef.close();
  }



}
