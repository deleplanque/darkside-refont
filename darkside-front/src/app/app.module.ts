import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AboutComponent } from './about/about.component';
import { PriceComponent } from './price/price.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { GoogleMapComponent } from './contact/google-map/google-map.component';
import { SallesComponent } from './salles/salles.component';
import { SalleComponent } from './salle/salle.component';
import {AppRoutingModule} from './app.routing.module';
import {FaqComponent} from './faq/faq.component';
import {HomeComponent} from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    AboutComponent,
    PriceComponent,
    ContactComponent,
    FooterComponent,
    GoogleMapComponent,
    SallesComponent,
    SalleComponent,
    FaqComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDvBFuQQv2YyNAgyM5Hi5c0FBqEyP68x-k'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
