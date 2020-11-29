import { CustomerDto } from "./CustomerDto";
import { OrderItem } from "./OrderItem";

export interface OrderDto {
  id: number;
  customer: CustomerDto;
  lineItems: Array<OrderItem>;
}
