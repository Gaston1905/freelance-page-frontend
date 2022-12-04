import { AlertsComponent } from './alerts/alerts.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    AlertsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    AlertsComponent
  ]
})
export class SharedModule { }
