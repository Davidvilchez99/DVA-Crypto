import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateFavouritesComponent } from './private-favourites.component';

describe('PrivateFavouritesComponent', () => {
  let component: PrivateFavouritesComponent;
  let fixture: ComponentFixture<PrivateFavouritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateFavouritesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
