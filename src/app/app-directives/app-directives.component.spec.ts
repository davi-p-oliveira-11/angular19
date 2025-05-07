import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDirectivesComponent } from './app-directives.component';

describe('AppDirectivesComponent', () => {
  let component: AppDirectivesComponent;
  let fixture: ComponentFixture<AppDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDirectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
