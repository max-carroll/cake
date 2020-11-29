import { ProductDto } from "./ProductDto";

export interface LineItemDto {
  id: number;
  product?: ProductDto;
  quantity: number;
}
