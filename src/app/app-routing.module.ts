import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatDialog,MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

const routes: Routes = [
   { path: '',   redirectTo: '/login', pathMatch: 'full' },
   {path: 'departments', loadChildren: () => import('./pages/departments/departments.module').then(m => m.DepartmentsModule) },
   { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
   { path: 'roles', loadChildren: () => import('./pages/roles/roles.module').then(m => m.RolesModule) },
   { path: 'suppliers', loadChildren: () => import('./pages/suppliers/suppliers.module').then(m => m.SuppliersModule) },
   { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
   { path: 'users', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule) },
   
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
