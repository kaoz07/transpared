import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MandosPageRoutingModule } from './mandos-routing.module';

import { MandosPage } from './mandos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MandosPageRoutingModule
  ],
  declarations: [MandosPage]
})
export class MandosPageModule {}
