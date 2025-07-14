import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AppDirectivesComponent } from './app-directives/app-directives.component';
import { StructuralDirectiveNgifVsIfComponent } from './structural-directive-ngif-vs-if/structural-directive-ngif-vs-if.component';
import { StructuralDirectiveNgforVsForComponent } from './structural-directive-ngfor-vs-for/structural-directive-ngfor-vs-for.component';
import { StructuralDirectiveNgswitchVsSwitchComponent } from './structural-directive-ngswitch-vs-switch/structural-directive-ngswitch-vs-switch.component';
import { AttributeDirectivesComponentComponent } from './attribute-directives-component/attribute-directives-component.component';
import { SignalsComponent } from './signals/signals.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
            SignalsComponent,
            ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular_19_tutorial';
}
