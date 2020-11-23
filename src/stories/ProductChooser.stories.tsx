// https://github.com/storybookjs/storybook/issues/5721

import React, { useState } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { ProductChooser } from "../components/ProductChooser";
import { ProductDto } from "../models/ProductDto";
import { products } from "./data";

export default {
  title: "Example/ProductChooser",
  component: ProductChooser,
} as Meta;

const Template: Story = (args) => <ProductChooserWrapper {...args} />;
function ProductChooserWrapper() {
  const [selected, setSelected] = useState<ProductDto | null>(null);
  return (
    <ProductChooser
      selected={selected}
      setSelected={setSelected}
      products={products}
    ></ProductChooser>
  );
}

export const Primary = Template.bind({});
