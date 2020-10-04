import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';
import { NonLazyModuleModule } from './non-lazy-module/non-lazy-module.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

let mainRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent},
  { path: '404', component: NotFoundComponent},
  { path: 'ng-template', loadChildren: () => import('./template-outlet/template-outlet.module').then(m => m.TemplateOutletModule) },
  { path: 'forms', loadChildren: () => import('./forms/allforms.module').then(m => m.AllFormsModule) },
  { path: '**', redirectTo: '404'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(mainRoutes),
    NonLazyModuleModule
  ],
  providers: [],
  exports: [
    NotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
