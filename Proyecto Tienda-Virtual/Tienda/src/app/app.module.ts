import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component'; 
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { CrearCategoriaComponent } from './components/crear-categoria/crear-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarProductosComponent, 
    CrearProductoComponent, CrearCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
