// https://github.com/storybookjs/storybook/issues/5721

import React, { useState } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { CustomerChooser } from "../components/CustomerChooser";
import { CustomerDto } from "../models/CustomerDto";

export default {
  title: "Example/CustomerChooser",
  component: CustomerChooser,
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
    <CustomerChooser
      selected={selected}
      setSelected={setSelected}
      customers={customers}
    ></CustomerChooser>
  );
}

export const Primary = Template.bind({});
