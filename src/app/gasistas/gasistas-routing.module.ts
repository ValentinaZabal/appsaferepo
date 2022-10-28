import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GasistasPage } from './gasistas.page';

const routes: Routes = [
  {
    path: '',
    component: GasistasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GasistasPageRoutingModule {}
