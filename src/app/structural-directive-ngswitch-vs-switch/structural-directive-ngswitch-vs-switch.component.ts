import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ngswitch-vs-switch',
  imports: [CommonModule],
  templateUrl: './structural-directive-ngswitch-vs-switch.component.html',
  styleUrl: './structural-directive-ngswitch-vs-switch.component.scss'
})
export class StructuralDirectiveNgswitchVsSwitchComponent {
  grade: number = 0;

  set(x:number) {
    this.grade = x;
  }

}
