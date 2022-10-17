import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { ProviderlistComponent } from './providerlist/providerlist.component';


@NgModule({
  declarations: [
    ProviderlistComponent
  ],
  imports: [
    CommonModule,
    ProviderRoutingModule
  ]
})
export class ProviderModule { }
