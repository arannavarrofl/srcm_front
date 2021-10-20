import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Supplier} from '../interfaces/supplier.interface';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {
  API_URI = 'http://localhost:3000/api/v2.0';
  constructor(private http: HttpClient) { 

  }//constructor

  saveSupplier(supplier: Supplier){
      return this.http.post(`${this.API_URI}/suppliers`, supplier);
  }

  getSuppliers(){
      return this.http.get(`${this.API_URI}/suppliers`);
  }

  updateSupplier(id: string, updatedSupplier:Supplier){
      return this.http.put(`${this.API_URI}/suppliers/${id}`,updatedSupplier);
  }

  deleteSupplier(id:string){
      return this.http.delete(`${this.API_URI}/suppliers/${id}`);
  }
}

