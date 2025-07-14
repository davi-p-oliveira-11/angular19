import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

   constructor(private router: Router) {
     console.log("Constructor called");
   }

   ngOnChanges(changes: SimpleChanges): void {
     // user for components input property
     console.log("1. ngOnChanged called");
   }

   ngOnInit(): void {
     // use for api call
     console.log("2. ngOnInit called");
   }

   ngDoCheck(): void {
    // use for every change detection
     console.log("3. ngDoCheck called");
   }

   ngAfterContentInit(): void {
     // use for ng-content
     console.log("4. ngAfterContentInit called");
   }

   ngAfterContentChecked(): void {
     console.log("5. ngAfterContentChecked");
   }

   ngAfterViewInit(): void {
    // use for viewchild
     console.log("6. ngAfterViewInit called");
   }

   ngAfterViewChecked(): void {
     console.log("7. ngAfterViewChecked called");
   }

   ngOnDestroy(): void {
     console.log("8. ngOnDestroy called");
   }

   loginData() {
     // user verficiation logic
     // this.router.navigateByUrl("structural-directive")
     this.router.navigate(['structural-directive'])
   }
}
