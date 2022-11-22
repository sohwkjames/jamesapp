import { Controller } from "react-hook-form";
import React from "react";
import { TextField } from "@mui/material";

export function FormInputText({ name, control, label }) {
  //
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        // assign some default value to prevent errors in console
        <TextField onChange={onChange} value={value || ""} label={label} />
      )}
    />
  );
}
