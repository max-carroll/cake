import { TextField } from "@material-ui/core";
import * as React from "react";
import { Dispatch, SetStateAction } from "react";
import { CustomerDto } from "../models/CustomerDto";
import Autocomplete from "@material-ui/lab/Autocomplete/Autocomplete";

export interface CustomerChooserProps {
  customers: Array<CustomerDto>;
  selected?: CustomerDto | null;
  setSelected: (customer: CustomerDto | null) => void;
}

export const CustomerChooser = ({
  customers,
  selected,
  setSelected,
}: CustomerChooserProps) => {
  return (
    <>
      <Autocomplete
        id="combo-box-demo"
        options={customers}
        getOptionLabel={(option) => option.name}
        style={{ width: 300 }}
        value={selected}
        renderInput={(params) => (
          <TextField {...params} label="Combo box" variant="outlined" />
        )}
        onChange={(e, v) => setSelected(v)}
      />
    </>
  );
};
