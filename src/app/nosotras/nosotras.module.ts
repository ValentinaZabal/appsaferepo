import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NosotrasPageRoutingModule } from './nosotras-routing.module';

import { NosotrasPage } from './nosotras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NosotrasPageRoutingModule
  ],
  declarations: [NosotrasPage]
})
export class NosotrasPageModule {}
