import { useState } from "react";
import styles from "./auth.module.css";
import { Controller, useForm } from "react-hook-form";
import { Paper, TextField, Button } from "@mui/material";
import { FormInputText } from "../../components/form/FormInputText";

export default function Auth() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log("data ->", data);

  return (
    <div className="min-h-screen flex ">
      <div className="w-1/2 bg-orange-100">big image goes here</div>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-2">
            <FormInputText control={control} name="username" label="Username" />
            <FormInputText control={control} name="password" label="Password" />
            <Button variant="outlined" type="submit">
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
