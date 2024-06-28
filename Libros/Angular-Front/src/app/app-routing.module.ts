import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearAutorComponent } from './components/crear-autor/crear-autor.component';
import { CrearLibroComponent } from './components/crear-libro/crear-libro.component';
import { EditarLibroComponent } from './components/editar-libro/editar-libro.component';
import { EditarAutorComponent } from './components/editar-autor/editar-autor.component';
import { ListaLibrosComponent } from './components/lista-libros/lista-libros.component';
import { ListaAutoresComponent } from './components/lista-autores/lista-autores.component';

const routes: Routes = [
  { path: 'crear-autor', component: CrearAutorComponent },
  { path: 'crear-libro', component: CrearLibroComponent },
  { path: 'editar-libro/:id', component: EditarLibroComponent },
  { path: 'editar-autor/:id', component: EditarAutorComponent },
  { path: 'lista-libros', component: ListaLibrosComponent },
  { path: 'lista-autores', component: ListaAutoresComponent },
  { path: '', redirectTo: '/lista-libros', pathMatch: 'full' },
  { path: '**', redirectTo: '/lista-libros', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
