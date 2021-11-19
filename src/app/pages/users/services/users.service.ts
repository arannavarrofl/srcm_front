import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API_URI = 'http://localhost:3000/api/v2.0';

  constructor(private http:HttpClient) { }

  saveUser(user:User){
    return this.http.post(`${this.API_URI}/users`,user);
  }
  getUsers(){
   return this.http.get(`${this.API_URI}/users`)

  }
  updateUser(updatedUser:User){
    return this.http.put(`${this.API_URI}/users/${updatedUser.userID}`,updatedUser)
  }
  deleteUser(id:string){
    return this.http.delete(`${this.API_URI}/users/${id}`)
  }

}
