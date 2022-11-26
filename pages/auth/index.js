import { useState } from "react";
import styles from "./auth.module.css";
import { Controller, useForm } from "react-hook-form";
import { Paper, TextField, Button } from "@mui/material";
import { FormInputText } from "../../components/form/FormInputText";
import Card from "../../components/ui/Card";
import TightContainer from "../../components/layout/TightContainer";

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
    <div className="h-screen bg-slate-100	">
      <div className=" py-20">
        <div className="border-blue-100 border-4 grid gap-4 grid-cols-1 sm:grid-cols-2 sm:max-w-3xl sm:mx-auto">
          <div className="px-4 my-4">
            <h1 className="text-3xl">Welcome!</h1>
          </div>

          <div className="p-4 m-4 pb-10 bg-white rounded-md shadow-md">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col space-y-2">
                <FormInputText
                  control={control}
                  name="username"
                  label="Username"
                />
                <FormInputText
                  control={control}
                  name="password"
                  label="Password"
                />
                <Button variant="outlined" type="submit">
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// Auth.getLayout = function getLayout(page) {
//   return <TightContainer>{page}</TightContainer>;
// };
