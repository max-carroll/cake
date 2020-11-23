import { TextField } from "@material-ui/core";
import * as React from "react";
import { CustomerDto } from "../models/CustomerDto";
import Autocomplete from "@material-ui/lab/Autocomplete/Autocomplete";
import { ProductDto } from "../models/ProductDto";

export interface ProductChooserProps {
  products: Array<ProductDto>;
  selected?: ProductDto | null;
  setSelected: (product: ProductDto | null) => void;
}

export const ProductChooser = ({
  products,
  selected,
  setSelected,
}: ProductChooserProps) => {
  return (
    <>
      <Autocomplete
        id="combo-box-demo"
        options={products}
        getOptionLabel={(option) => option.name}
        style={{ width: 300 }}
        value={selected}
        renderInput={(params) => (
          <TextField {...params} label="Select Customer" variant="outlined" />
        )}
        onChange={(e, v) => setSelected(v)}
      />
    </>
  );
};
