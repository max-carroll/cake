import * as React from "react";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { CustomerDto } from "../models/CustomerDto";
import { OrderDto } from "../models/OrderDto";
import { OrderItem } from "../models/OrderItem";
import { ProductDto } from "../models/ProductDto";
import { CustomerChooser } from "./CustomerChooser";
import { ProductChooser } from "./ProductChooser";

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

  const handleAddProduct = (product: ProductDto | null) => {
    if (!product) return;

    var item: OrderItem = {
      id: 0,
      product,
      quantity: 1,
    };

    setOrder((old) => ({
      ...old!,
      lineItems: old?.lineItems ? [...old!.lineItems, item] : [item],
    }));
  };

  return (
    <>
      <CustomerChooser
        customers={customers}
        setSelected={handleSelectCustomer}
      ></CustomerChooser>
      <ProductChooser
        products={products}
        setSelected={handleAddProduct}
      ></ProductChooser>

      {order?.lineItems?.map((li) => (
        <li>{li}</li>
      ))}
    </>
  );
};
