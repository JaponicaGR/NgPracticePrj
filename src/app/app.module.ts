import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';

let mainRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent},
  { path: '404', component: NotFoundComponent},
  { path: 'ng-template', loadChildren: () => import('./template-outlet/template-outlet.module').then(m => m.TemplateOutletModule) },
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
    RouterModule.forRoot(mainRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
