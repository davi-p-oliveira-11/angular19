import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedSignalsComponent } from './linked-signals.component';

describe('LinkedSignalsComponent', () => {
  let component: LinkedSignalsComponent;
  let fixture: ComponentFixture<LinkedSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkedSignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
