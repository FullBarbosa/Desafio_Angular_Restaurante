import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/interface/pedido';
import { BaseservicesService } from 'src/app/services/baseservices.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
})
export class PedidosComponent implements OnInit {
  constructor(
    private servicesPedido: BaseservicesService,
    private router: Router
  ) {}

  pedidos!: Pedido[];
  pedidoId!: Pedido;
  total!: any;

  ngOnInit(): void {
    this.servicesPedido.listarPedidos().subscribe((pedido: Array<Pedido>) => {
      this.pedidos = pedido;
      console.log(this.pedidos);
    });
  }

  statusPedidoConcluido(id: any): void {
    this.servicesPedido.listarPedidoId(id).subscribe((dados) => {
      dados.status = 'Concluido';

      this.servicesPedido.modificarPedidoId(dados).subscribe(() => {
        this.router.navigate(['/']);
      });
    });
  }

  statusPedidoCancelado(id: any): void {
    this.servicesPedido.listarPedidoId(id).subscribe((dados) => {
      dados.status = 'Cancelado';

      this.servicesPedido.modificarPedidoId(dados).subscribe(() => {
        this.router.navigate(['/']);
      });
    });
  }
}
