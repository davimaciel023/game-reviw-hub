import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesExternosComponent } from './detalhes-externos.component';

describe('DetalhesExternosComponent', () => {
  let component: DetalhesExternosComponent;
  let fixture: ComponentFixture<DetalhesExternosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesExternosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesExternosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
