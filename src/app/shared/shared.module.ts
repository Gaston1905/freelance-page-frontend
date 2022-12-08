import { AlertsComponent } from './alerts/alerts.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonUpComponent } from './button-up/button-up.component';



@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    AlertsComponent,
    ButtonUpComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    AlertsComponent,
    ButtonUpComponent
  ]
})
export class SharedModule { }
