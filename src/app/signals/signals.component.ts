import { ChangeDetectionStrategy, Component, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class SignalsComponent {
  
  normalCounter = 0;
  counter = signal(0);
  // counter : WritableSignal<number> = signal(0);

  constructor() {
    this.counter.set(5);
   // setTimeout(() => {
   //   this.normalCounter = 50;
   //   this.counter.set(30);
   //   console.log("Normal counter value => " + this.counter())
   //  }, 5000)

    effect(() => console.log("The value of the counter is : " ))
  }

    onIncrement() {
      this.counter.update(initialValue => initialValue + 1);
  }

}
