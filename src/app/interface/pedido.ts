export interface Pedido {
  id: number;
  mesa: number;
  pratos: [
    {
      nome: string;
      preco: number;
    }
  ];
  status: string;
}
