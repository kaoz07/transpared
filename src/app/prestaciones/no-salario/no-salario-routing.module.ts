import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoSalarioPage } from './no-salario.page';

const routes: Routes = [
  {
    path: '',
    component: NoSalarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoSalarioPageRoutingModule {}
