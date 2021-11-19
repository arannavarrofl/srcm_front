import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Login} from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URI = 'http://localhost:3000/api/v2.0';

  constructor(private http:HttpClient) { }

  validateLogin(login:Login){
    return this.http.post(`${this.API_URI}/login`, login);
  }

}//class






