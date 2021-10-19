import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {path: 'departments', loadChildren: () => import('./pages/departments/departments.module').then(m => m.DepartmentsModule) },
   { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
   { path: 'roles', loadChildren: () => import('./pages/roles/roles.module').then(m => m.RolesModule) },
   { path: 'suppliers', loadChildren: () => import('./pages/suppliers/suppliers.module').then(m => m.SuppliersModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
