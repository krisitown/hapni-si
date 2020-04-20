import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { OffersComponent } from './offers/offers.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { StorageManagerService } from './storage-manager.service';
import { LogoutComponent } from './logout/logout.component';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { AgmCoreModule } from '@agm/core';
import { OfferComponent } from './offer/offer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    OffersComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    CreateOfferComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [StorageManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
