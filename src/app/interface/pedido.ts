export interface Pedido {
  id: number;
  mesa: number;
  prato: {
    id: number;
    nome?: string;
    preco?: number;
  };
  status: string;
}
