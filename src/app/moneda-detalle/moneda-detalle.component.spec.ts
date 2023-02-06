import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonedaDetalleComponent } from './moneda-detalle.component';

describe('MonedaDetalleComponent', () => {
  let component: MonedaDetalleComponent;
  let fixture: ComponentFixture<MonedaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonedaDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonedaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
