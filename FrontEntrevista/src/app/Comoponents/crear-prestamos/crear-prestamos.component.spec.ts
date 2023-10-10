import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPrestamosComponent } from './crear-prestamos.component';

describe('CrearPrestamosComponent', () => {
  let component: CrearPrestamosComponent;
  let fixture: ComponentFixture<CrearPrestamosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearPrestamosComponent]
    });
    fixture = TestBed.createComponent(CrearPrestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
