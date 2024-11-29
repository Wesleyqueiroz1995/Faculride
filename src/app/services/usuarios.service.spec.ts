import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing'; // Importando módulos de teste
import { UsuariosService } from './usuarios.service';  // Caminho correto para o serviço

describe('UsuariosService', () => {
  let service: UsuariosService;
  let httpMock: HttpTestingController;

  // Antes de cada teste, configuramos o TestBed
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [provideHttpClientTesting],  // Configura o módulo de testes para o HttpClient
      providers: [UsuariosService],       // Registra o serviço
    });
    service = TestBed.inject(UsuariosService);  // Injetando o serviço
    httpMock = TestBed.inject(HttpTestingController);  // Injetando o HttpTestingController
  });

  it('should be created', () => {
    expect(service).toBeTruthy();  // Verifica se o serviço foi criado corretamente
  });

  it('should fetch users data', () => {
    const dummyUsuarios = [
      { id: 1, nome: 'Breno', distancia: '0.5', saida: '18:30', volta: '22:40', custo: '50', imagem: '/assets/breno.jpeg' },
      { id: 2, nome: 'Wendel', distancia: '1.0', saida: '18:10', volta: '22:40', custo: '25', imagem: '/assets/wendel.jpeg' },
    ];

    service.getUsuarios().subscribe((usuarios) => {
      expect(usuarios.length).toBe(2);
      expect(usuarios).toEqual(dummyUsuarios);
    });

    // Defina a requisição simulada e responda com os dados esperados
    const req = httpMock.expectOne('http://localhost:3001/usuarios');
    expect(req.request.method).toBe('GET');  // Verifica se a requisição é do tipo GET
    req.flush(dummyUsuarios);  // Simula a resposta com os dados de teste

    httpMock.verify();  // Verifica se não há requisições pendentes
  });

  // Limpeza após os testes (não é estritamente necessário, mas é uma boa prática)
  afterEach(() => {
    httpMock.verify();
  });
});
