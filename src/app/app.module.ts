import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NavigationComponent } from './shared/components/navigation/navigation.component';


@NgModule({
  declarations: [//Inyectar componentes o directivas
    AppComponent,
    NavigationComponent
  ],
  imports: [ //Módulos de Angular que necesitamos
    BrowserModule,
    AppRoutingModule,//Aquí están inlcuidos los módulos de departments
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [

  ],//Inyectar todas las dependencias, los servicios
  bootstrap: [AppComponent],
  exports:[]//componentes que queremos exponer a otros módulos

})
export class AppModule { }
