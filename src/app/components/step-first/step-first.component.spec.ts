import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFirstComponent } from './step-first.component';

describe('StepFirstComponent', () => {
  let component: StepFirstComponent;
  let fixture: ComponentFixture<StepFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepFirstComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
