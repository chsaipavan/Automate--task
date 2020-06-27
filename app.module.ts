import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
import {FormsModule} from '@angular/forms';
import { Note2Component } from './note2/note2.component';
import { Note3Component } from './note3/note3.component';  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PricingComponent,
    Note2Component,
    Note3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
