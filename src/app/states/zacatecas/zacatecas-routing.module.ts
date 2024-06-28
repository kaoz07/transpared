import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZacatecasPage } from './zacatecas.page';

const routes: Routes = [
  {
    path: '',
    component: ZacatecasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZacatecasPageRoutingModule {}
