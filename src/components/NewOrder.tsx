import * as React from "react";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { ProductDto } from "../models/ProductDto";

interface OrderDto {}

interface CustomerDto {}

export interface OrderProps {
  order: OrderDto;
  setOrder: Dispatch<SetStateAction<OrderDto>>;
  products?: Array<ProductDto>;
  customer?: Array<CustomerDto>;
}

export const NewOrder = ({ order, setOrder }: OrderProps) => {
  const handleChange = (name: string) => (
    event: ChangeEvent<HTMLTextAreaElement>
  ) =>
    setOrder((old) => ({
      ...old,
      [name]: event.target.value,
    }));

  return <></>;
};
