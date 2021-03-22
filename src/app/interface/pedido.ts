export interface Pedido {
  id?: number;
  mesa?: number;
  pratos?: [
    {
      id: number;
      nome: string;
      preco: number;
    }
  ];
  status?: string;
}
