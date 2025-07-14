import { Component, computed, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signals',
  imports: [],
  templateUrl: './linked-signals.component.html',
  styleUrl: './linked-signals.component.scss'
})
export class LinkedSignalsComponent {

  quantitySignal = signal(1);
  price = 10;
 // total = computed(() => {
 //   return this.quantitySignal() * this.price;
 // })

  // total =  linkedSignal(() => {
  //  return this.quantitySignal() * this.price;
  // })

  total = linkedSignal({
    source : this.quantitySignal,
    computation: () => this.quantitySignal() * this.price
  })

  calculate() {
    this.quantitySignal.set(10);
  }
}
