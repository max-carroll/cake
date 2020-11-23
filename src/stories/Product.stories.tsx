// https://github.com/storybookjs/storybook/issues/5721

import React, { useState } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Product } from "../components/Product";
import { ProductDto } from "../models/ProductDto";

export default {
  title: "Example/Product",
  component: Product,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story = (args) => <ProductWrapper {...args} />;
function ProductWrapper() {
  const [product, setProduct] = useState<ProductDto>({
    name: "myProduct",
    productionCost: 100,
    salePrice: 200,
  });
  return <Product product={product} setProduct={setProduct}></Product>;
}

export const Primary = Template.bind({});
Primary.args = {
  product: { name: "timmy", productionCost: 0, salePrice: 0 },
};
