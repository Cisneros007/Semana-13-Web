import { Autor } from "./autor.model";

export class Libro {
  id?: any;
  titulo?: string;
  descripcion?: string;
  publicado?: boolean;
  autorId?: any;
  autor?: Autor;
}

