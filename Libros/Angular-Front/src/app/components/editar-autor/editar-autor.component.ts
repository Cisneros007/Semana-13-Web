import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Autor } from '../../models/autor.model'; // Asegúrate de importar el modelo Autor adecuado
import { AutorService } from '../../services/autor.service'; // Asegúrate de importar el servicio AutorService adecuado

@Component({
  selector: 'app-editar-autor',
  templateUrl: './editar-autor.component.html',
  styleUrls: ['./editar-autor.component.css']
})
export class EditarAutorComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentAutor: Autor = {
    nombre: '',
    apellido: ''
  };

  message = '';

  constructor(
    private autorService: AutorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getAutor(this.route.snapshot.params['id']);
    }
  }

  getAutor(id: string): void {
    this.autorService.get(id).subscribe({
      next: (data) => {
        this.currentAutor = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  updateAutor(): void {
    this.message = '';

    this.autorService
      .update(this.currentAutor.id, this.currentAutor)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'Este autor se ha actualizado correctamente!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteAutor(): void {
    this.autorService.delete(this.currentAutor.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/autores']);
      },
      error: (e) => console.error(e)
    });
  }
}
