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
  const [qty, setQty] = React.useState<string>("1");

  function handleChangeQty(e: any) {
    var number = parseInt(e.target.value);
    setQty(e.target.value);
  }

  function handleAdd() {
    var number = parseInt(qty);

    if (Number.isNaN(number)) return;

    if (number < 1) return;

    setSelected(product, number);
  }

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
        label="Quanitity"
        type="number"
        variant="outlined"
        onChange={handleChangeQty}
      ></TextField>
      <Button onClick={handleAdd}>Add </Button>
    </>
  );
};
