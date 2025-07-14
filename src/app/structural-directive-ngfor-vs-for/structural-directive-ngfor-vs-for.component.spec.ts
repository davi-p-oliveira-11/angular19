import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveNgforVsForComponent } from './structural-directive-ngfor-vs-for.component';

describe('StructuralDirectiveNgforVsForComponent', () => {
  let component: StructuralDirectiveNgforVsForComponent;
  let fixture: ComponentFixture<StructuralDirectiveNgforVsForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirectiveNgforVsForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirectiveNgforVsForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
