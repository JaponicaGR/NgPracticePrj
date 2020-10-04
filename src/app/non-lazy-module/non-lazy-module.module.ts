import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NonLazyModuleRoutingModule } from './non-lazy-module-routing.module';
import { NonLazyComponent } from './non-lazy/non-lazy.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [NonLazyComponent],
  imports: [
    CommonModule,
    NonLazyModuleRoutingModule,
  ]
})
export class NonLazyModuleModule { }
