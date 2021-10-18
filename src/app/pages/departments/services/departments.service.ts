import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Department} from '../interfaces/department.interface';


@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  API_URI = 'http://localhost:3000/api/v2.0';
  constructor(private http: HttpClient) { 

  }//constructor

 
  getDepartments(){
    return this.http.get(`${this.API_URI}/departments`);
  }

  getDepartment(id: string){
    return this.http.get(`${this.API_URI}/departments/${id}`);
  }

  deleteDepartment(id:string){
    return this.http.delete(`${this.API_URI}/departments/${id}`);
  }

  saveDepartment(dept: Department){
    return this.http.post(`${this.API_URI}/departments`, dept);
  }

  updateDepartment(id:string,updatedDept:Department): Observable<Department>{
    return this.http.put(`${this.API_URI}/departments/${id}`,updatedDept);
  }


}
