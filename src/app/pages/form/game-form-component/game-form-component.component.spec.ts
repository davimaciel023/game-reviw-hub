import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFormComponentComponent } from './game-form-component.component';

describe('GameFormComponentComponent', () => {
  let component: GameFormComponentComponent;
  let fixture: ComponentFixture<GameFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameFormComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
