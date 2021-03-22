import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { MesasComponent } from './pages/mesas/mesas.component';
import { PratosComponent } from './pages/pratos/pratos.component';
import { CardComponent } from './components/card/card.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ModalComponent } from './components/modal/modal.component';
import { MesaidComponent } from './pages/mesaid/mesaid.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    MesasComponent,
    PratosComponent,
    CardComponent,
    PedidosComponent,
    ModalComponent,
    MesaidComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
