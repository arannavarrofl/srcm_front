import { Component, OnInit, ViewChild } from '@angular/core';
import {DepartmentsService} from '../departments/services/departments.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import{AlertComponent} from '../../shared/components/alert/alert.component';
import{ConfirmDialogComponent} from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import{FormDepartmentComponent} from '../departments/form-department/form-department.component';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  departments:any=[];
  displayedColumns: string[] = ['deptID', 'deptName', 'operations'];
  dataSource!: MatTableDataSource<any>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private deptsService:DepartmentsService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getDepartments();
  
  }//ngOnInit

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }//applyFilter

  getDepartments(){
    this.deptsService.getDepartments().subscribe(
      res=>{
        this.departments=res
        this.dataSource = new MatTableDataSource(this.departments);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      err=>console.log(err)
    );
  }//getDepartments

  deleteDepartment(deptID:string){
    let respuesta:any = { message: "" };
    this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: { 'title': 'Eliminar Departamento', 'type': 'success', 'message': '¿Está seguro de eliminar este registro?' }
    }).afterClosed().subscribe(res => {
      if (res) {
            this.deptsService.deleteDepartment(deptID).subscribe(res => {
            this.getDepartments();
            respuesta=res;
            this.dialog.open(AlertComponent, {
              width: '400px',
              data: { 'title': 'Eliminado', 'type': 'success', 'message': respuesta.message }
            });
          });
      }//res
    });
  }//deleteDepartment

  showModalDepartment() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "600px";
    this.dialog.open(FormDepartmentComponent, dialogConfig).afterClosed().subscribe(result => {
      this.getDepartments();
    });
  }//showModalDepartment

  showModalEditDepartment(department:string) {
    this.dialog.open(FormDepartmentComponent, {
      disableClose: true,
      width: '600px',
      data: department
    }).afterClosed().subscribe(result => {
      this.getDepartments();
    });
 
  }// showModalEditDepartment
}
