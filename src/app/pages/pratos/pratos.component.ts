import { Component, OnInit } from '@angular/core';
import { Prato } from 'src/app/interface/prato';
import { BaseservicesService } from 'src/app/services/baseservices.service';

@Component({
  selector: 'app-pratos',
  templateUrl: './pratos.component.html',
  styleUrls: ['./pratos.component.css'],
})
export class PratosComponent implements OnInit {
  constructor(private servicesPrato: BaseservicesService) {}

  pratos!: Prato[];

  condition!: boolean;
  conditionButton!: boolean;

  ngOnInit(): void {
    this.condition = false;
    this.conditionButton = true;

    this.servicesPrato.listarPratos().subscribe((prato: Array<Prato>) => {
      this.pratos = prato;
      console.log(prato);
    });
  }

  modal() {
    this.conditionButton = false;
    this.condition = !this.condition;
  }
}
