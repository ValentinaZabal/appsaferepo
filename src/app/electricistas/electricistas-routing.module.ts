import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectricistasPage } from './electricistas.page';

const routes: Routes = [
  {
    path: '',
    component: ElectricistasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectricistasPageRoutingModule {}
