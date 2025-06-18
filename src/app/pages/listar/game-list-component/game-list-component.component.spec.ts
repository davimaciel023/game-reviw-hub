import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListComponentComponent } from './game-list-component.component';

describe('GameListComponentComponent', () => {
  let component: GameListComponentComponent;
  let fixture: ComponentFixture<GameListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameListComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
