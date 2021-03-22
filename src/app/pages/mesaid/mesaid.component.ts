import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute
  ) {}

  mesa!: Mesa;

  pratos!: Prato[];

  pedidos!: Pedido[];

  checked = <any>[];

  ngOnInit(): void {
    // numero de mesa
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.servicesMesaId.listarMesaId(id).subscribe((mesaid: any) => {
      this.mesa = mesaid;
    });

    // pratos disponiveis
    this.servicesMesaId.listarPratos().subscribe((prato: Array<Prato>) => {
      this.pratos = prato;
    });

    // pedidos
    this.servicesMesaId.listarPedidos().subscribe((pedido: Array<Pedido>) => {
      this.pedidos = pedido.filter((dados) => dados.mesa === this.mesa.id);
      console.log(this.pedidos);
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

  // Logica de pedido
  comanda(event: any) {
    event.preventDefault();

    const value = this.pratos.filter((dados) =>
      this.checked.includes(dados.nome)
    );

    const value2 = {
      mesa: this.mesa.id,
      pratos: value,
      status: 'Novo',
    };

    this.servicesMesaId.createPedido(value2).subscribe(() => {
      alert('cadastrado');
    });
  }
}
