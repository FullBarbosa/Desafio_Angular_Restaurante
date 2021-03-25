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

  baseUrl = 'http://localhost:8080/api';
  baseMesa = '/mesas';
  basePrato = '/pratos';
  basePedido = '/pedidos';

  //Services Mesas
  listarMesas(): Observable<Mesa[]> {
    return this.http.get<Mesa[]>(this.baseUrl + this.baseMesa);
  }

  createMesa(mesa: object): Observable<Mesa> {
    return this.http.post<Mesa>(this.baseUrl + this.baseMesa, mesa);
  }

  listarMesaId(id: number): Observable<Mesa> {
    return this.http.get<Mesa>(`${this.baseUrl}${this.baseMesa}/${id}`);
  }

  modificarStatusMesaId(mesa: Mesa): Observable<Mesa> {
    return this.http.put<Mesa>(
      `${this.baseUrl}${this.baseMesa}/${mesa.id}`,
      mesa
    );
  }

  // Services Pedidos
  listarPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.baseUrl + this.basePedido);
  }

  listarPedidoId(id: number): Observable<Pedido> {
    return this.http.get<Pedido>(`${this.baseUrl}${this.basePedido}/${id}`);
  }

  modificarPedidoId(pedido: Pedido): Observable<Pedido> {
    return this.http.put<Pedido>(
      `${this.baseUrl}${this.basePedido}/${pedido.id}`,
      pedido
    );
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
