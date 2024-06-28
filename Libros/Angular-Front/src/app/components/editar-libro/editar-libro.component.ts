import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from '../../models/libro.model';
import { LibroService } from '../../services/libro.service';
import { Autor } from '../../models/autor.model';
import { AutorService } from '../../services/autor.service';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css']
})
export class EditarLibroComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentLibro: Libro = {};
  autores: Autor[] = [];
  message = '';

  constructor(
    private libroService: LibroService,
    private autorService: AutorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAutores();

    if (!this.viewMode) {
      this.message = '';
      this.getLibro(+this.route.snapshot.params['id']);
    }
  }

  loadAutores(): void {
    this.autorService.getAll().subscribe({
      next: (data) => {
        this.autores = data;
      },
      error: (e) => console.error(e)
    });
  }

  getLibro(id: number): void {
    this.libroService.get(id).subscribe({
      next: (data) => {
        this.currentLibro = data;
      },
      error: (e) => console.error(e)
    });
  }

  updateLibro(): void {
    this.message = '';

    this.libroService.update(this.currentLibro.id, this.currentLibro).subscribe({
      next: () => {
        this.message = '¡El libro se actualizó exitosamente!';
      },
      error: (e) => console.error(e)
    });
  }

  deleteLibro(): void {
    this.libroService.delete(this.currentLibro.id).subscribe({
      next: () => {
        this.message = '¡El libro se eliminó exitosamente!';
        this.router.navigate(['/libros']);
      },
      error: (e) => console.error(e)
    });
  }

  updateAutor(autorId: any): void {
    this.currentLibro.autorId = autorId;
    this.updateLibro();
  }
}
