import { useQuery } from "react-query";
import axios from "axios";
const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

async function login(formData) {
  const request = axios.post(baseUrl + "/login", {
    username: formData.username,
    password: formData.password,
  });

  // Let's return a Promise that resolves the data for us.
  return request.then((response) => response.data);
}

async function register(formData) {
  const request = axios.post(baseUrl + "/users", {
    username: formData.username,
    name: formData.username,
    password: formData.password,
  });

  return request.then((response) => response.data);
}

// This exports an object. Consumer can name this object during import.
// Will be called by sth like loginService.login
export default { login, register };
