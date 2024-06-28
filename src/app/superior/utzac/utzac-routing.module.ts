import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtzacPage } from './utzac.page';

const routes: Routes = [
  {
    path: '',
    component: UtzacPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtzacPageRoutingModule {}
