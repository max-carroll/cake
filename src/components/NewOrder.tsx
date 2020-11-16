import * as React from "react";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { CustomerDto } from "../models/CustomerDto";
import { OrderDto } from "../models/OrderDto";
import { ProductDto } from "../models/ProductDto";
import { CustomerChooser } from "./CustomerChooser";

export interface OrderProps {
  order: OrderDto | null;
  setOrder: Dispatch<SetStateAction<OrderDto | null>>;
  products: Array<ProductDto>;
  customers: Array<CustomerDto>;
}

export const NewOrder = ({
  order,
  setOrder,
  customers,
  products,
}: OrderProps): JSX.Element => {
  const handleSelectCustomer = (customer: CustomerDto | null) => {
    if (customer != null) setOrder((old) => ({ ...old!, customer }));
  };

  return (
    <>
      <CustomerChooser
        customers={customers}
        setSelected={handleSelectCustomer}
      ></CustomerChooser>
    </>
  );
};
