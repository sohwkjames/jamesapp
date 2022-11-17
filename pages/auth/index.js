import { useState } from "react";
import styles from "./auth.module.css";
import { Controller, useForm } from "react-hook-form";
import { Paper, TextField, Button } from "@mui/material";

export default function Auth() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className={styles.auth}>
      <Paper>
        <TextField
          label={"Text Value"} //optional
        />

        <Button>Submit</Button>
        <Button>Reset</Button>
      </Paper>
    </div>
  );
}
