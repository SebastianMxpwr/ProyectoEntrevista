import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPagosComponent } from './mostrar-pagos.component';

describe('MostrarPagosComponent', () => {
  let component: MostrarPagosComponent;
  let fixture: ComponentFixture<MostrarPagosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarPagosComponent]
    });
    fixture = TestBed.createComponent(MostrarPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
