import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderlistComponent } from './providerlist/providerlist.component';

const routes: Routes = [
  {path: 'provider',
  component:ProviderlistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }
