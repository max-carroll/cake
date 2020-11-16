import { CustomerDto } from "./CustomerDto";
import { ProductDto } from "./ProductDto";

export interface OrderItem {
  id: number;
  product?: ProductDto;
  quantity: number;
}

export interface OrderDto {
  id: number;
  customer: CustomerDto;
}