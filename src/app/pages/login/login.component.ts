import { Component, OnInit } from '@angular/core';
import {LoginService} from './services/login.service';
import {Login} from './interfaces/login.interface';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  session:any;
  login:Login = {
    email: "",
    password: ""
  }

  constructor(private loginService: LoginService, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.session = localStorage.getItem('token');
    if(this.session!=null){
      this.router.navigate(['/home']);
    }
  }

  validateLogin(){
    let respuesta:any = {token:null, message: "" };
    this.loginService.validateLogin(this.login).subscribe(

      res=>{
        respuesta = res;
        if(respuesta.token==null){
          this.dialog.open(AlertComponent, {
            width: '400px',
            data: { 'title': 'Error', 'type': 'error', 'message': respuesta.message }
          });
        
        }//if
        else{
          localStorage.setItem('token',respuesta.token);
          this.router.navigate(['/home']);
        }
        

      },
      err=>{ 
        console.log(err);
      }
    );
  }

}
