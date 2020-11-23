// https://github.com/storybookjs/storybook/issues/5721

import React, { useState } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { CustomerChooser } from "../components/CustomerChooser";
import { CustomerDto } from "../models/CustomerDto";
import { customers } from "./data";

export default {
  title: "Example/CustomerChooser",
  component: CustomerChooser,
} as Meta;

const Template: Story = (args) => <CustomerChooserWrapper {...args} />;
function CustomerChooserWrapper() {
  const [selected, setSelected] = useState<CustomerDto | null>(null);
  return (
    <CustomerChooser
      selected={selected}
      setSelected={setSelected}
      customers={customers}
    ></CustomerChooser>
  );
}

export const Primary = Template.bind({});
