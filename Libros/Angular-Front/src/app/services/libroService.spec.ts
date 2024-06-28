import { TestBed } from '@angular/core/testing';
import { LibroService } from './libro.service'; // Ajusta la importación según la ubicación real de tu servicio LibroService

describe('LibroService', () => {
  let service: LibroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
