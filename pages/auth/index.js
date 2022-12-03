import { useState } from "react";
import styles from "./auth.module.css";
import { Controller, useForm } from "react-hook-form";
import { Paper, TextField, Button } from "@mui/material";
import { FormInputText } from "../../components/form/FormInputText";
import Card from "../../components/ui/Card";
import TightContainer from "../../components/layout/TightContainer";
import loginService from "../../services/login";
import { useMutation } from "react-query";
import { useCookies } from "react-cookie";

export default function Auth() {
  const [loginSelected, setLoginSelected] = useState(true);
  const [cookies, setCookies, removeCookie] = useCookies();
  const { mutate, isError, error, data } = useMutation({
    mutationFn: (formData) => loginService.login(formData),
  });
  const {
    register: loginRegister,
    handleSubmit: handleLoginSubmit,
    watch: watchLogin,
    control: loginControl,
    formState: { loginErrors },
  } = useForm();

  const {
    register: signupRegister,
    handleSubmit: handleRegisterSubmit,
    watch: watchRegister,
    control: registerControl,
    formState: { registerErrors },
  } = useForm();

  const onSubmitLogin = async (formData) => {
    mutate(formData, {
      onSuccess: (data) => {
        console.log("Login success, data->", data);
        // setCookies("token", data.token); // your token
        // setCookies("name", data.name); // optional data
      },
    });
  };

  const handleSuccessfulLogin = () => {
    // Get JWT value
    // Set context
    // Redirect to homepage
  };

  console.log("data->", data);

  return (
    <div className="h-screen bg-slate-100	">
      <div className=" py-20">
        <div className="border-blue-100 border-4 grid gap-4 grid-cols-1 sm:grid-cols-2 sm:max-w-3xl sm:mx-auto">
          <div className="px-4 my-4">
            <h1 className="text-3xl">Welcome!</h1>
          </div>

          <div className="p-4 m-4 pb-10 bg-white rounded-md shadow-md">
            <div className="my-2 flex justify-around">
              <p
                onClick={() => setLoginSelected(true)}
                className={loginSelected ? styles.loginSelected : styles.login}
              >
                Login
              </p>
              <p
                onClick={() => setLoginSelected(false)}
                className={!loginSelected ? styles.loginSelected : styles.login}
              >
                Signup
              </p>

              {/* <p onClick={() => setLoginSelected(false)}>Signup</p> */}
            </div>
            {isError && <p className="py-4">Incorrect username or password.</p>}
            <div className="my-4">
              <form onSubmit={handleLoginSubmit(onSubmitLogin)}>
                <div className="flex flex-col space-y-2">
                  <FormInputText
                    control={loginControl}
                    name="username"
                    label="Username"
                    error={isError}
                  />
                  <FormInputText
                    control={loginControl}
                    name="password"
                    label="Password"
                    type="password"
                    error={isError}
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
    </div>
  );
}

// Auth.getLayout = function getLayout(page) {
//   return <TightContainer>{page}</TightContainer>;
// };
