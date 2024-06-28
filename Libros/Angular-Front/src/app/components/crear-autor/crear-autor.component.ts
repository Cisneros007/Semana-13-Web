import { Component } from '@angular/core';
import { Autor } from '../../models/autor.model';
import { AutorService } from '../../services/autor.service';

@Component({
  selector: 'app-crear-autor',
  templateUrl: './crear-autor.component.html',
  styleUrls: ['./crear-autor.component.css']
})
export class CrearAutorComponent {
  autor: Autor = {
    nombre: '',
    apellido: ''
  };
  submitted = false;

  constructor(private autorService: AutorService) {}

  guardarAutor(): void {
    const data = {
      nombre: this.autor.nombre,
      apellido: this.autor.apellido
    };

    this.autorService.create(data).subscribe({
      next: (res) => {
        console.log('Autor creado correctamente:', res);
        this.submitted = true;
      },
      error: (err) => {
        console.error('Error al crear el autor:', err);
        if (err.status === 500) {
          alert('Error interno del servidor al crear el autor. Por favor, intenta nuevamente más tarde.');
        } else {
          alert('Ocurrió un error al crear el autor. Detalles: ' + err.error.message);
        }
      }
    });
  }

  nuevoAutor(): void {
    this.submitted = false;
    this.autor = {
      nombre: '',
      apellido: ''
    };
  }
}
