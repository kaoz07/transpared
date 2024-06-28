import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MandosPage } from './mandos.page';

const routes: Routes = [
  {
    path: '',
    component: MandosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MandosPageRoutingModule {}
