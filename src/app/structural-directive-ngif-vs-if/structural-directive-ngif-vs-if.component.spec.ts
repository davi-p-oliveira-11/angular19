import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveNgifVsIfComponent } from './structural-directive-ngif-vs-if.component';

describe('StructuralDirectiveNgifVsIfComponent', () => {
  let component: StructuralDirectiveNgifVsIfComponent;
  let fixture: ComponentFixture<StructuralDirectiveNgifVsIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirectiveNgifVsIfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirectiveNgifVsIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
