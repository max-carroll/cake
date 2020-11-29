import { Button, TextField } from "@material-ui/core";
import * as React from "react";
import { CustomerDto } from "../models/CustomerDto";
import Autocomplete from "@material-ui/lab/Autocomplete/Autocomplete";
import { ProductDto } from "../models/ProductDto";

export interface ProductChooserProps {
  products: Array<ProductDto>;
  selected?: ProductDto | null;
  setSelected: (product: ProductDto | null, quantity: number) => void;
}

export const ProductChooser = ({
  products,
  selected,
  setSelected,
}: ProductChooserProps) => {
  const [product, setProduct] = React.useState<ProductDto | null>(null);
  const [qty, setQty] = React.useState<number>(1);

  return (
    <>
      <Autocomplete
        id="combo-box-demo"
        options={products}
        getOptionLabel={(option) => option.name}
        style={{ width: 300 }}
        value={selected}
        renderInput={(params) => (
          <TextField {...params} label="Select Product" variant="outlined" />
        )}
        onChange={(e, v) => setProduct(v)}
      />
      <TextField
        value={qty}
        onChange={(e: any) => setQty(parseInt(e.target.value))}
      ></TextField>
      <Button onClick={() => setSelected(product, qty)}>Add </Button>
    </>
  );
};
