import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { RolesService } from '../services/roles.service';
import { Role } from '../interfaces/roles.interfaces';
import{AlertComponent} from '../../../shared/components/alert/alert.component';

@Component({
  selector: 'app-form-role',
  templateUrl: './form-role.component.html',
  styleUrls: ['./form-role.component.css']
})
export class FormRoleComponent implements OnInit {
  title:string;
  role:Role = {
    roleID:"",
    roleName: ""
  };


  constructor(private rolesService: RolesService,private dialogRef:MatDialogRef<FormRoleComponent>,
    private dialog:MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) {
        this.title="";
     }

  ngOnInit(): void {
    if (this.data == null) { 
      this.title = "Nuevo rol de usuario";     
    }
    else {
      this.title = "Editar role usuario";
      this.role=this.data;
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  saveRole(){
    console.log("Clickkkkkkkkkkkk!!!!!!!!!!!!!");
    let respuesta:any = { message: "" };
    this.rolesService.saveRole(this.role).subscribe(
      res=>{
        respuesta = res;
        this.onClose();
        this.dialog.open(AlertComponent,{
          width:'400px',
          data: {'title': 'Guardado', 'type': 'success', 'message': respuesta.message }
        })

      },
      err=>{
          console.log(err);
      }
    );
  }


}
