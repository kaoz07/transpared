import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZacatecasPageRoutingModule } from './zacatecas-routing.module';

import { ZacatecasPage } from './zacatecas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZacatecasPageRoutingModule
  ],
  declarations: [ZacatecasPage]
})
export class ZacatecasPageModule {}
