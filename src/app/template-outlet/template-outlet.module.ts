import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateOutletComponent } from './template-outlet.component';
import {TemplateOutletRoutingModule} from "./template-outlet-rooting.module";
import { CardItemComponent } from './card-item/card-item.component';
import { ListItemDirective } from './directives/list-item.directive';
import { CardItemDirective } from './directives/card-item.directive';


@NgModule({
  declarations: [
    TemplateOutletComponent,
    CardItemComponent,
    ListItemDirective,
    CardItemDirective
  ],
  imports: [
    CommonModule,
    TemplateOutletRoutingModule
  ]
})
export class TemplateOutletModule { }
