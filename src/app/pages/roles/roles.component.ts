import { Component, OnInit, ViewChild } from '@angular/core';
import {RolesService } from './services/roles.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import{AlertComponent} from '../../shared/components/alert/alert.component';
import{ConfirmDialogComponent} from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormRoleComponent } from './form-role/form-role.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  roles:any=[];
  displayedColumns: string[] = ['roleID', 'roleName', 'operations'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private rolesService:RolesService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getRoles();
  } 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }//applyFilter

  getRoles(){
    this.rolesService.getRoles().subscribe(
      res=>{
        this.roles=res
        this.dataSource = new MatTableDataSource(this.roles);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      err=>console.log(err)
    );
  }//getDepartments

  deleteRole(roleID:string){
    let respuesta:any = { message: "" };
    this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: { 'title': 'Eliminar Departamento', 'type': 'success', 'message': '¿Está seguro de eliminar este registro?' }
    }).afterClosed().subscribe(res => {
      if (res) {
            this.rolesService.deleteRole(roleID).subscribe(res => {
            this.getRoles();
            respuesta=res;
            this.dialog.open(AlertComponent, {
              width: '400px',
              data: { 'title': 'Eliminado', 'type': 'success', 'message': respuesta.message }
            });
          });
      }//res
    });
  }//deleteDepartment

  showModalRole() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "600px";
    this.dialog.open(FormRoleComponent, dialogConfig).afterClosed().subscribe(result => {
      this.getRoles();
    });
  }//showModalDepartment

}
