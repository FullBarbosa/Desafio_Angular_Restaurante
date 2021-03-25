import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetAlert } from 'src/app/components/Swet/sweet.alert';

import { Mesa } from 'src/app/interface/mesa';
import { Pedido } from 'src/app/interface/pedido';
import { Prato } from 'src/app/interface/prato';
import { BaseservicesService } from 'src/app/services/baseservices.service';

@Component({
  selector: 'app-mesaid',
  templateUrl: './mesaid.component.html',
  styleUrls: ['./mesaid.component.css'],
})
export class MesaidComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    // private formBuilder: FormBuilder,
    private servicesMesaId: BaseservicesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  mesa!: Mesa;

  pratos!: Prato[];

  pedidos!: Pedido[];

  checked = <any>[];

  totalAPagagar!: number;

  ngOnInit(): void {
    // numero de mesa

    const id = +this.route.snapshot.paramMap.get('id')!;
    this.servicesMesaId.listarMesaId(id).subscribe((mesaid) => {
      this.mesa = mesaid;
    });

    // pratos disponiveis
    this.servicesMesaId.listarPratos().subscribe((prato: Array<Prato>) => {
      this.pratos = prato;
    });

    // pedidos
    this.servicesMesaId.listarPedidos().subscribe((pedido: Array<Pedido>) => {
      this.pedidos = pedido.filter(
        (dados) => dados.mesa === this.mesa.id && dados.status !== 'Cancelado'
      );

      // soma de comanda
      this.totalAPagagar = this.pedidos
        .filter((a) => a.status !== 'Fechado' && a.status !== 'Novo')
        .map((a) => a.prato.reduce((a, b) => a + b.preco, 0))
        .reduce((a, b) => a + b);
    });
  }

  // logica do chekckedBox
  onCheckChange(event: any) {
    event.preventDefault();

    if (event.target.checked) {
      this.checked.push(event.target.value);
    } else {
      this.checked = this.checked.filter(
        (valor: string) => valor !== event.target.value
      );
    }
  }

  // logica cancelar

  cancel() {
    this.router.navigate(['/']);
  }

  // Logica de pedido
  realisarpedido(event: any) {
    event.preventDefault();

    const value = this.pratos.filter((dados) =>
      this.checked.includes(dados.nome)
    );

    const value2 = {
      mesa: this.mesa.id,
      status: 'Novo',
      prato: value,
    };

    if (value2.prato.length !== 0) {
      SweetAlert.exibirSucesso(' Pedido Realizado!🥰🥰🥰');
      this.servicesMesaId.createPedido(value2).subscribe(() => {
        this.router.navigate(['/mesas']);
      });
    } else {
      SweetAlert.exibirErro('Escolha um pedido!🥵🥵🥵');
    }
  }

  // pagar conta
  pagarConta() {
    const Novopedido = this.pedidos.filter((a) => a.status !== 'Novo');

    for (let pedido of Novopedido) {
      pedido.status = 'Fechado';
      this.servicesMesaId.modificarPedidoId(pedido).subscribe(() => {
        SweetAlert.exibirSucesso(
          'Valor pago:' + this.totalAPagagar + 'R$' + ' Volte Sempre!🥰🥰🥰'
        );
      });
    }
    this.router.navigate(['/']);
  }
}
