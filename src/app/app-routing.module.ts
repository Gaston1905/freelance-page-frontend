import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SystemComponent } from './components/system/system.component';
import { AuditComponent } from './components/audit/audit.component';
import { HomeComponent } from './shared/home/home.component';
import { QuoteWebsiteComponent } from './components/quote-website/quote-website.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'quote', component: QuoteWebsiteComponent },
  { path: 'audit', component: AuditComponent },
  { path: 'system', component: SystemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }