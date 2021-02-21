import * as React from "react";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { CustomerDto } from "../models/CustomerDto";
import { OrderDto } from "../models/OrderDto";
import { LineItemDto } from "../models/OrderItem";
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

  const handleAddProduct = (product: ProductDto | null, quantity: number) => {
    if (!product) return;

    var existingItem = order?.lineItems?.find(
      (li) => li!.product!.id === product.id
    );
    if (existingItem) {
      existingItem.quantity += quantity;

      var newLineItems =
        order?.lineItems.filter((li) =>
          li?.product?.id === existingItem?.product?.id ? existingItem : li
        ) ?? new Array<LineItemDto>();

      setOrder((old) => ({
        ...old!,
        lineItems: newLineItems,
      }));
    }

    if (!existingItem) {
      var newItem: LineItemDto = {
        id: 0,
        product,
        quantity,
      };

      setOrder((old) => ({
        ...old!,
        lineItems: old?.lineItems ? [...old!.lineItems, newItem] : [newItem],
      }));
    }
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
        <li>
          <LineItem lineItem={li} />
        </li>
      ))}
    </>
  );
};

interface LineItemProps {
  lineItem: LineItemDto;
}

export const LineItem = ({ lineItem }: LineItemProps) => {
  const name = lineItem?.product?.name;
  const qty = lineItem.quantity;

  return (
    <>
      <div>
        {name} - {qty}
      </div>
    </>
  );
};
