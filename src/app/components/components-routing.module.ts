import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditComponent } from './audit/audit.component';
import { QuoteWebsiteComponent } from './quote-website/quote-website.component';
import { SystemComponent } from './system/system.component';

const routes: Routes = [
  { path: 'quote', component: QuoteWebsiteComponent },
  { path: 'audit', component: AuditComponent },
  { path: 'system', component: SystemComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ComponentRoutingModule { }
