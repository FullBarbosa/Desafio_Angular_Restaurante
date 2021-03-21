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

  ngOnInit(): void {
    this.servicesPrato.listarPratos().subscribe((prato: Array<Prato>) => {
      this.pratos = prato;
      console.log(prato);
    });
  }
}
