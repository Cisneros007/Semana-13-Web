import { Component, OnInit } from '@angular/core';
import { Autor } from '../../models/autor.model';
import { AutorService } from '../../services/autor.service';

@Component({
  selector: 'app-lista-autor',
  templateUrl: './lista-autores.component.html',
  styleUrls: ['./lista-autores.component.css']
})
export class ListaAutoresComponent implements OnInit {
  autores: Autor[] = [];
  currentAutor: Autor = {};
  currentIndex = -1;

  constructor(private autorService: AutorService) {}

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

  refreshList(): void {
    this.retrieveAutores();
    this.currentAutor = {};
    this.currentIndex = -1;
  }

  setActiveAutor(autor: Autor, index: number): void {
    this.currentAutor = autor;
    this.currentIndex = index;
  }

  removeAllAutores(): void {
    this.autorService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }
}
