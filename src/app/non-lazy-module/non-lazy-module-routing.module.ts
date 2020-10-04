import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NonLazyComponent} from "./non-lazy/non-lazy.component";

const routes: Routes = [
  { path: 'non-lazy', component: NonLazyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NonLazyModuleRoutingModule { }
