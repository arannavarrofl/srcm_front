import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { DepartmentsRoutingModule } from '../../departments/departments-routing.module';
import { DepartmentsService } from '../../departments/services/departments.service';
import { RolesService } from '../../roles/services/roles.service';
import { User } from '../interfaces/user.interface';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  depts:any=[];
  roles:any=[];

  user:User = {
    userID: "",
    userName: "",
    firstLastname: "",
    secondLastname: "",
    email: "",
    password: "",
    roleID: "",
    deptID: ""
  }

  constructor(private deptsService:DepartmentsService, private usersService:UsersService,
    private rolesService:RolesService,private dialog:MatDialog,private dialogRef:MatDialogRef<FormUserComponent>) { }

  ngOnInit(): void {
    this.getDepartments();
    this.getRoles();
  }

  getDepartments(){
    this.deptsService.getDepartments().subscribe(
      res=>{
        this.depts = res;
      },
      err=>{console.log(err);}
    );
  }//getDepartments

  getRoles(){
    this.rolesService.getRoles().subscribe(
      res=>{
        this.roles = res;
      },
      err=>{console.log(err);}
    );
  }//getDepartments

  saveUser(){
    let respuesta:any = { message: "" };
    this.user.password= this.generatePassword(this.user.email);
    this.usersService.saveUser(this.user).subscribe(
      res=>{
        respuesta = res; 
        this.onClose();      
        this.dialog.open(AlertComponent, {
          width: '400px',
          data: { 'title': 'Guardado', 'type': 'success', 'message': respuesta.message }
        });
      },
      err=>{

      }
    );
   
  }

  onClose() {
    this.dialogRef.close();
  }

  generatePassword(email:string):string{
    let pass: any=[];
    let pwd:string ="";
    pwd=email;
    pass=pwd.split('@');
    return pass[0]+"2021";
  }

}
