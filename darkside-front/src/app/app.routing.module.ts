import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FaqComponent} from './faq/faq.component';
import {HomeComponent} from './home/home.component';
import {SalleComponent} from './salle/salle.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: HomeComponent },
  { path: 'salle', component: SalleComponent },
  { path: 'faq', component: FaqComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export  class  AppRoutingModule {}
