import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectricistasPageRoutingModule } from './electricistas-routing.module';

import { ElectricistasPage } from './electricistas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectricistasPageRoutingModule
  ],
  declarations: [ElectricistasPage]
})
export class ElectricistasPageModule {}
