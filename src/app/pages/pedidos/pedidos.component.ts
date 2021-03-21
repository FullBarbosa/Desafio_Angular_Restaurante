import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/interface/pedido';
import { BaseservicesService } from 'src/app/services/baseservices.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
})
export class PedidosComponent implements OnInit {
  constructor(private servicesPedido: BaseservicesService) {}

  pedidos!: Pedido[];
  total!: any;
  ngOnInit(): void {
    this.servicesPedido.listarPedidos().subscribe((pedido: Array<Pedido>) => {
      this.pedidos = pedido;
    });
  }
}
