import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NosotrasPage } from './nosotras.page';

const routes: Routes = [
  {
    path: '',
    component: NosotrasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NosotrasPageRoutingModule {}
