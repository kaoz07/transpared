import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UtzacPageRoutingModule } from './utzac-routing.module';

import { UtzacPage } from './utzac.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UtzacPageRoutingModule
  ],
  declarations: [UtzacPage]
})
export class UtzacPageModule {}
