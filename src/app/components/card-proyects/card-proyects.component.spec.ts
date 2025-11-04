import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProyectsComponent } from './card-proyects.component';

describe('CardProyectsComponent', () => {
  let component: CardProyectsComponent;
  let fixture: ComponentFixture<CardProyectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardProyectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProyectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
