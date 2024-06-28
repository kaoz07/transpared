import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SueldosPage } from './sueldos.page';

const routes: Routes = [
  {
    path: '',
    component: SueldosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SueldosPageRoutingModule {}
