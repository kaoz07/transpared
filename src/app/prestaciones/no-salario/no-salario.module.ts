import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoSalarioPageRoutingModule } from './no-salario-routing.module';

import { NoSalarioPage } from './no-salario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoSalarioPageRoutingModule
  ],
  declarations: [NoSalarioPage]
})
export class NoSalarioPageModule {}
