import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mesa } from 'src/app/interface/mesa';
import { BaseservicesService } from 'src/app/services/baseservices.service';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css'],
})
export class MesasComponent implements OnInit {
  constructor(
    private servicesMesa: BaseservicesService,
    private router: Router
  ) {}

  mesas!: Mesa[];

  ngOnInit(): void {
    this.servicesMesa.listarMesas().subscribe((mesa: Array<Mesa>) => {
      this.mesas = mesa;
      console.log(mesa);
    });
  }
}
