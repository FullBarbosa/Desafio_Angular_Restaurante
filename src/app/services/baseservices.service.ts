import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mesa } from '../interface/mesa';
import { Prato } from '../interface/prato';
import { Pedido } from '../interface/pedido';

@Injectable({
  providedIn: 'root',
})
export class BaseservicesService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:3000';
  baseMesa = '/mesas';
  basePrato = '/prato';
  basePedido = '/pedido';

  //Services Mesas
  listarMesas(): Observable<Mesa[]> {
    return this.http.get<Mesa[]>(this.baseUrl + this.baseMesa);
  }

  listarMesaId(id: number): Observable<Mesa> {
    return this.http.get<Mesa>(`${this.baseUrl}${this.baseMesa}/${id}`);
  }

  // Services Pedidos
  listarPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.baseUrl + this.basePedido);
  }

  createPedido(pedido: object): Observable<Pedido> {
    return this.http.post<Pedido>(this.baseUrl + this.basePedido, pedido);
  }

  // Services Prato
  listarPratos(): Observable<Prato[]> {
    return this.http.get<Prato[]>(this.baseUrl + this.basePrato);
  }
  createPrato(prato: object): Observable<Prato> {
    return this.http.post<Prato>(this.baseUrl + this.basePrato, prato);
  }
}
