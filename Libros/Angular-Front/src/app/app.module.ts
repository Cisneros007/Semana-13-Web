import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { CrearAutorComponent } from './components/crear-autor/crear-autor.component';
import { CrearLibroComponent } from './components/crear-libro/crear-libro.component';
import { EditarLibroComponent } from './components/editar-libro/editar-libro.component';
import { EditarAutorComponent } from './components/editar-autor/editar-autor.component';
import { ListaLibrosComponent } from './components/lista-libros/lista-libros.component';
import { ListaAutoresComponent } from './components/lista-autores/lista-autores.component'; 

@NgModule({
  declarations: [
    AppComponent,
    CrearAutorComponent,
    CrearLibroComponent,
    EditarLibroComponent,
    EditarAutorComponent,
    ListaLibrosComponent,
    ListaAutoresComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
