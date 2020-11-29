import { ProductDto } from "./ProductDto";

export interface OrderItem {
  id: number;
  product?: ProductDto;
  quantity: number;
}
