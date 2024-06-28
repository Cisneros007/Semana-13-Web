import { TestBed } from '@angular/core/testing';
import { AutorService } from './autor.service'; // Ajusta la importación según la ubicación real de tu servicio AutorService

describe('AutorService', () => {
  let service: AutorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
