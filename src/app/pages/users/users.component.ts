import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from './services/users.service';
import { DepartmentsService } from '../departments/services/departments.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormUserComponent } from './form-user/form-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user:any=[];
  depts:any=[];
  displayedColumns: string[] = ['userID', 'userName','firstLastname','secondLastname',
  'email','roleID','deptID', 'operations'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private usersService: UsersService, private deptsService:DepartmentsService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUsers();
   
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }//applyFilter

  getUsers(){
    this.usersService.getUsers().subscribe(
      res=>{
        this.user=res        
        this.dataSource = new MatTableDataSource(this.user);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      err=>console.log(err)
    );
  }

 /* getDepartments(){
    this.deptsService.getDepartments().subscribe(
      res=>{
        this.depts = res;
        console.log(this.depts);
      },
      err=>{console.log(err);}
    );
  }
/*/
  showModalUser(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "600px";
    this.dialog.open(FormUserComponent, dialogConfig).afterClosed().subscribe(result => {
      this.getUsers();
    });
  }
}
