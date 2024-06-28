import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SueldosPageRoutingModule } from './sueldos-routing.module';

import { SueldosPage } from './sueldos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SueldosPageRoutingModule
  ],
  declarations: [SueldosPage]
})
export class SueldosPageModule {}
