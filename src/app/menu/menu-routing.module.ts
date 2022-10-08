import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [  {
      path: 'inicio',
      loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule),
    },
    {
      path: 'ayuda',
      loadChildren: () => import('../ayuda/ayuda.module').then( m => m.AyudaPageModule)
    },
    {
      path: 'reservas',
      loadChildren: () => import('../reservas/reservas.module').then( m => m.ReservasPageModule)
    },
    {
      path: 'nosotras',
      loadChildren: () => import('../nosotras/nosotras.module').then( m => m.NosotrasPageModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
