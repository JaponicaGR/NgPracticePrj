import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllformsRoutingModule } from './allforms-routing.module';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DriverComponent } from './reactive/driver/driver.component';


@NgModule({
  declarations: [
    TemplateComponent,
    ReactiveComponent,
    DriverComponent
  ],
  imports: [
    CommonModule,
    AllformsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AllFormsModule { }
