import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDirectivesComponentComponent } from './attribute-directives-component.component';

describe('AttributeDirectivesComponentComponent', () => {
  let component: AttributeDirectivesComponentComponent;
  let fixture: ComponentFixture<AttributeDirectivesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributeDirectivesComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeDirectivesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
