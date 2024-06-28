import { Component, OnInit } from '@angular/core';
import { Libro } from '../../models/libro.model'; 
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {
  libros: Libro[] = [];
  currentLibro: Libro = {};
  currentIndex = -1;
  title = '';

  constructor(private libroService: LibroService) {}

  ngOnInit(): void {
    this.retrieveLibros();
  }

  retrieveLibros(): void {
    this.libroService.getAll().subscribe({
      next: (data) => {
        this.libros = data;
        console.log(data);
      },
      error: (e) => console.error('Error al obtener libros:', e)
    });
  }

  refreshList(): void {
    this.retrieveLibros();
    this.currentLibro = {};
    this.currentIndex = -1;
  }

  setActiveLibro(libro: Libro, index: number): void {
    this.currentLibro = libro;
    this.currentIndex = index;
  }

  removeAllLibros(): void {
    this.libroService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error('Error al eliminar todos los libros:', e)
    });
  }

  searchTitle(): void {
    this.currentLibro = {};
    this.currentIndex = -1;

    this.libroService.findByTitle(this.title).subscribe({
      next: (data) => {
        this.libros = data;
        console.log(data);
      },
      error: (e) => console.error('Error al buscar libros por título:', e)
    });
  }
}
