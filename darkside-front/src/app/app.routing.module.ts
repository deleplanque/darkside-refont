import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';

const routes: Routes = [

  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: '/accueil', component: AppComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export  class  AppRoutingModule {}
