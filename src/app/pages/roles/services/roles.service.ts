import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from '../interfaces/roles.interfaces';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  API_URI = 'http://localhost:3000/api/v2.0';

  constructor(private http: HttpClient) { }

  saveRole(role:Role){
    return this.http.post(`${this.API_URI}/roles`,role);
  }
  getRoles(){
   return this.http.get(`${this.API_URI}/roles`)

  }
  updateRole(updatedRole:Role){
    return this.http.put(`${this.API_URI}/roles/${updatedRole.roleID}`,updatedRole)
  }
  deleteRole(id:string){
    return this.http.delete(`${this.API_URI}/roles/${id}`)
  }


}
