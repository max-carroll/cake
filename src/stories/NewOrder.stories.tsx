// https://github.com/storybookjs/storybook/issues/5721

import React, { useState } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { OrderDto } from "../models/OrderDto";
import { NewOrder } from "../components/NewOrder";
import { products, customers } from "./data";

export default {
  title: "Example/NewOrder",
  component: NewOrder,
} as Meta;

const Template: Story = (args) => <NewOrderWrapper {...args} />;
function NewOrderWrapper() {
  const [order, setOrder] = useState<OrderDto | null>(null);
  return (
    <NewOrder
      order={order}
      setOrder={setOrder}
      customers={customers}
      products={products}
    ></NewOrder>
  );
}

export const Primary = Template.bind({});
