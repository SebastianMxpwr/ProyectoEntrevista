import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPrestamoComponent } from './editar-prestamo.component';

describe('EditarPrestamoComponent', () => {
  let component: EditarPrestamoComponent;
  let fixture: ComponentFixture<EditarPrestamoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPrestamoComponent]
    });
    fixture = TestBed.createComponent(EditarPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
