import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MesasComponent } from './pages/mesas/mesas.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { PratosComponent } from './pages/pratos/pratos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'mesas',
    component: MesasComponent,
  },

  {
    path: 'pedidos',
    component: PedidosComponent,
  },

  {
    path: 'pratos',
    component: PratosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
