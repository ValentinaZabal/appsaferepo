import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlomerosPageRoutingModule } from './plomeros-routing.module';

import { PlomerosPage } from './plomeros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlomerosPageRoutingModule
  ],
  declarations: [PlomerosPage]
})
export class PlomerosPageModule {}
