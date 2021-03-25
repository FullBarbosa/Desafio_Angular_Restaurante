export interface Pedido {
  id: number;
  mesa: number;
  status: string;
  prato: [
    {
      id: number;
      nome: string;
      preco: number;
    }
  ];
}
