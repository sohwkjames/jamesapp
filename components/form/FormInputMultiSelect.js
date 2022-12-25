import TextField from "@material-ui/core/TextField";
import { Controller } from "react-hook-form";
import React from "react";
import { Select } from "@mui/material";

export function FormInputMultiSelect({ name, control, label, options }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Select
          onChange={onChange}
          value={value || ""}
          label={label}
          options={options}
        />
      )}
    />
  );
}
