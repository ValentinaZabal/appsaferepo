import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GasistasPageRoutingModule } from './gasistas-routing.module';

import { GasistasPage } from './gasistas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GasistasPageRoutingModule
  ],
  declarations: [GasistasPage]
})
export class GasistasPageModule {}
