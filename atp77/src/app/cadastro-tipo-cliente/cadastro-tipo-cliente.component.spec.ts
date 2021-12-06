import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTipoClienteComponent } from './cadastro-tipo-cliente.component';

describe('CadastroTipoClienteComponent', () => {
  let component: CadastroTipoClienteComponent;
  let fixture: ComponentFixture<CadastroTipoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroTipoClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroTipoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
