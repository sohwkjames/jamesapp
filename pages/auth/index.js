import { useState } from "react";
import styles from "./auth.module.css";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { FormInputText } from "../../components/form/FormInputText";
import loginService from "../../services/login";
import { useMutation } from "react-query";
import { useCookies } from "react-cookie";
import Layout from "../../components/layout/Layout";
import { useRouter } from "next/router";
import TightContainer from "../../components/layout/TightContainer";
import { useAuth } from "../../context/AuthContext";

export default function Auth() {
  const [loginSelected, setLoginSelected] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  const router = useRouter();
  const { handleLoginSuccess } = useAuth();

  const { mutate, isError, error, data } = useMutation({
    mutationFn: (formData) => loginService.login(formData),
  });

  const {
    mutate: registerMutation,
    isError: isErrorRegister,
    error: errorRegister,
    data: dataRegister,
  } = useMutation({
    mutationFn: (formData) => loginService.register(formData),
  });

  const {
    // register: loginRegister,
    handleSubmit: handleLoginSubmit,
    watch: watchLogin,
    control: loginControl,
    formState: { loginErrors },
  } = useForm();

  const {
    // register: signupRegister,
    handleSubmit: handleRegisterSubmit,
    watch: watchRegister,
    control: registerControl,
    formState: { registerErrors },
  } = useForm();

  const onSubmitLogin = async (formData) => {
    mutate(formData, {
      onSuccess: (data) => {
        handleLoginSuccess(data);
        // dispatch({ action: "set", username: data.username, token: data.token });
        router.push("/");
      },
    });
  };

  const onSubmitRegister = async (formData) => {
    registerMutation(formData, {
      onSuccess: (data) => {
        console.log("in registerMutatino success, data is", data);
        handleLoginSuccess(data);
        router.push("/");
      },
    });
  };

  return (
    <div className="py-20 grid gap-4 grid-cols-1 text-black">
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
        </div>
        {isError && <p className="py-4">Incorrect username or password.</p>}
        {loginSelected && (
          <div className="my-4">
            <form onSubmit={handleLoginSubmit(onSubmitLogin)}>
              <div className="flex flex-col space-y-2">
                {/* autoComplete is to prevent chrome autocomplete  */}
                <FormInputText
                  control={loginControl}
                  name="username"
                  label="Username"
                  error={isError}
                  autoComplete="new-password"
                />
                <FormInputText
                  control={loginControl}
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="new-password"
                />
                <Button variant="outlined" type="submit">
                  {loginSelected ? "Login" : "Sign Up"}
                </Button>
              </div>
            </form>
          </div>
        )}

        {!loginSelected && (
          <div className="my-4">
            <form onSubmit={handleRegisterSubmit(onSubmitRegister)}>
              <div className="flex flex-col space-y-2">
                {/* autoComplete is to prevent chrome autocomplete  */}
                <FormInputText
                  control={registerControl}
                  name="username"
                  label="Username"
                  error={isError}
                  autoComplete="new-password"
                />
                <FormInputText
                  control={registerControl}
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="new-password"
                />
                <Button variant="outlined" type="submit">
                  {loginSelected ? "Login" : "Sign up"}
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

Auth.getLayout = function getLayout(page) {
  return <TightContainer>{page}</TightContainer>;
};
