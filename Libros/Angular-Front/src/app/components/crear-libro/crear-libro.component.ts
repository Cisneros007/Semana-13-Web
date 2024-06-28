import { Component, OnInit } from '@angular/core';
import { Libro } from '../../models/libro.model'; // Asegúrate de importar el modelo Libro adecuado
import { LibroService } from '../../services/libro.service'; // Asegúrate de importar el servicio LibroService adecuado
import { Autor } from '../../models/autor.model'; // Asegúrate de importar el modelo Autor adecuado
import { AutorService } from '../../services/autor.service'; // Asegúrate de importar el servicio AutorService adecuado

@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.component.html',
  styleUrls: ['./crear-libro.component.css']
})
export class CrearLibroComponent implements OnInit {
  libro: Libro = {
    titulo: '',
    descripcion: '',
    publicado: false,
    autorId: null
  };

  autores: Autor[] = [];
  submitted = false;

  constructor(private libroService: LibroService, private autorService: AutorService) {}

  ngOnInit(): void {
    this.retrieveAutores();
  }

  retrieveAutores(): void {
    this.autorService.getAll().subscribe({
      next: (data) => {
        this.autores = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  saveLibro(): void {
    const data = {
      titulo: this.libro.titulo,
      descripcion: this.libro.descripcion,
      autorId: this.libro.autorId // Agregar autorId
    };

    this.libroService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newLibro(): void {
    this.submitted = false;
    this.libro = {
      titulo: '',
      descripcion: '',
      publicado: false,
      autorId: null // Resetear autorId
    };
  }
}
