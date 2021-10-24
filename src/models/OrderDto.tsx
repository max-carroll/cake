import { CustomerDto } from "./CustomerDto";
import { LineItemDto } from "./OrderItem";

export interface OrderDto {
  id: number;
  customer: CustomerDto;
  lineItems: Array<LineItemDto>;
  dueDate: any;
}
