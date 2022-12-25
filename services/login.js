import { useQuery } from "react-query";
import axios from "axios";
const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/login`;

async function login(formData) {
  const request = axios.post(baseUrl, {
    username: formData.username,
    password: formData.password,
  });

  console.log("in loginservice, request is", request);
  // Let's return a Promise that resolves the data for us.
  return request.then((response) => response.data);
}

// This exports an object. Consumer can name this object during import.
// Will be called by sth like loginService.login
export default { login };
