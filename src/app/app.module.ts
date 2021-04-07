import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { TiendaComponent } from './tienda/tienda.component';

import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CategoriasComponent,
    TiendaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
