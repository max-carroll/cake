// https://github.com/storybookjs/storybook/issues/5721

import React, { useState } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { CustomerDto } from "../models/CustomerDto";
import { OrderDto } from "../models/OrderDto";
import { NewOrder } from "../components/NewOrder";

export default {
  title: "Example/OrderChooser",
  component: NewOrder,
} as Meta;

const Template: Story = (args) => <NewOrderWrapper {...args} />;
function NewOrderWrapper() {
  const customers: CustomerDto[] = [
    { id: 1, name: "adam" },
    { id: 2, name: "barry" },
    { id: 3, name: "cherry" },
    { id: 4, name: "dingo" },
    { id: 5, name: "elphante" },
  ];

  const [order, setOrder] = useState<OrderDto | null>(null);
  return (
    <NewOrder
      order={order}
      setOrder={setOrder}
      customers={customers}
      products={[]}
    ></NewOrder>
  );
}

export const Primary = Template.bind({});
