import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingFormComponentComponent } from './rating-form-component.component';

describe('RatingFormComponentComponent', () => {
  let component: RatingFormComponentComponent;
  let fixture: ComponentFixture<RatingFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingFormComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
