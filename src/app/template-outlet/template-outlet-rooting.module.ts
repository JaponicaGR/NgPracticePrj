import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TemplateOutletComponent} from "./template-outlet.component";

const routes: Routes = [
  { path: '', component: TemplateOutletComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateOutletRoutingModule { }
