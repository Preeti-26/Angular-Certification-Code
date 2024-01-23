import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepSecondComponent } from './step-second.component';

describe('StepSecondComponent', () => {
  let component: StepSecondComponent;
  let fixture: ComponentFixture<StepSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepSecondComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
