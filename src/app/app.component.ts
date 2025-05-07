import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AppDirectivesComponent } from './app-directives/app-directives.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppDirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular_19_tutorial';
}
