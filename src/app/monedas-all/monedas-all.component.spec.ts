import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonedasAllComponent } from './monedas-all.component';

describe('MonedasAllComponent', () => {
  let component: MonedasAllComponent;
  let fixture: ComponentFixture<MonedasAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonedasAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonedasAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
