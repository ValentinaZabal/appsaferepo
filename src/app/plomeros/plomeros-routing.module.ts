import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlomerosPage } from './plomeros.page';

const routes: Routes = [
  {
    path: '',
    component: PlomerosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlomerosPageRoutingModule {}
