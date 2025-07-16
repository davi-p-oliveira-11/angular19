import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructuralDirectiveNgifVsIfComponent } from './structural-directive-ngif-vs-if/structural-directive-ngif-vs-if.component';
import { AttributeDirectivesComponentComponent } from './attribute-directives-component/attribute-directives-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

export const routes: Routes = [
      // {path: '', component: UserComponent},
      {path: '', redirectTo:'user', pathMatch:'full'},
      {path : 'user', component: UserComponent },
      {path : 'data-binding', component: DataBindingComponent },
      {path : 'structural-directive', component: StructuralDirectiveNgifVsIfComponent },
      {path : 'attribute-directive', component: AttributeDirectivesComponentComponent },
      {path : 'built-in-pipes', component: BuiltInPipesComponent},
      {path : 'tdf', component: TemplateDrivenFormComponent},
      {path : 'rf', component: ReactiveFormComponent},
      {path : '**', component: PageNotFoundComponent}
];
