import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveNgswitchVsSwitchComponent } from './structural-directive-ngswitch-vs-switch.component';

describe('StructuralDirectiveNgswitchVsSwitchComponent', () => {
  let component: StructuralDirectiveNgswitchVsSwitchComponent;
  let fixture: ComponentFixture<StructuralDirectiveNgswitchVsSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirectiveNgswitchVsSwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirectiveNgswitchVsSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
