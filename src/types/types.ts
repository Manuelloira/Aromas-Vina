export interface Item {
  id: number; // Cambiado a number
  title: string;
  cost: number; // Precio convertido a número
  imageUrl: string;
  count: number;
}

export interface Product {
  id: number; // Cambiado a number
  name: string;
  description: string;
  price: string; // Precio como string (por el símbolo €)
  image: string;
  region: string;
}