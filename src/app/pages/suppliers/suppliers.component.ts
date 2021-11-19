import { Component, OnInit, ViewChild } from '@angular/core';
import {SuppliersService} from './services/suppliers.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import{AlertComponent} from '../../shared/components/alert/alert.component';
import{ConfirmDialogComponent} from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormSuppliersComponent } from './form-suppliers/form-suppliers.component';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  suppliers: any = [];

  displayedColumns: string[] = ['supplierID', 'supplierName','rfc','address','city','state','operations'];
  dataSource!: MatTableDataSource<any>; 
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private supplierService: SuppliersService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getSuppliers();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }//applyFilter

  getSuppliers(){
    this.supplierService.getSuppliers().subscribe(
      res=>{
        this.suppliers = res;
        this.dataSource = new MatTableDataSource(this.suppliers);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      err=>console.log(err)
    );
  }//getSuppliers

  deleteSupplier(supplierID:string){
    let respuesta:any = { message: "" };
    this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: { 'title': 'Eliminar Proveedor', 'type': 'success', 'message': '¿Está seguro de eliminar este registro?' }
    }).afterClosed().subscribe(res => {
      if (res) {
            this.supplierService.deleteSupplier(supplierID).subscribe(res => {
            this.getSuppliers();
            respuesta=res;
            this.dialog.open(AlertComponent, {
              width: '400px',
              data: { 'title': 'Eliminado', 'type': 'success', 'message': respuesta.message }
            });
          });
 

      }//res
    });
  }//deleteSupplier

  showModalSupplier() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "600px";
    this.dialog.open(FormSuppliersComponent, dialogConfig).afterClosed().subscribe(result => {
      this.getSuppliers();
    });
  }//showModalSupplier

  showModalEditSupplier(supplier:string) {
    this.dialog.open(FormSuppliersComponent, {
      disableClose: true,
      width: '600px',
      data: supplier
    }).afterClosed().subscribe(result => {
      this.getSuppliers();
    });

  }// showModalEditDepartment

}
