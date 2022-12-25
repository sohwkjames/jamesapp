import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useCookies } from "react-cookie";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [username, setUsername] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies([""]);

  // On page reload, need to check cookies for existing auth.
  useEffect(() => {
    const token = cookies.token;

    // no token.
    if (token === null || token === undefined) {
      setUsername(null);
      setIsAuthenticated(false);
      setIsLoading(false);
    } else {
      // Todo: Hit server with JWT to check if valid JWT.
      setIsAuthenticated(true);
      setUsername(cookies.username);
    }
  }, []);

  function handleLoginSuccess(data) {
    console.log("in handleLoginSuccess");
    setIsAuthenticated(true);
    setUsername(data.username);

    setCookie("token", data.token);
    setCookie("username", data.username);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        username,
        isLoading,
        handleLoginSuccess,
        // login,
        // logout,
        // loginWithToken,
      }}
    >
      {/* <AuthDispatchContext.Provider value={dispatch}> */}
      {children}
      {/* </AuthDispatchContext.Provider> */}
    </AuthContext.Provider>
  );
}

// Provides interface for consumer components to use.
export function useAuth() {
  return useContext(AuthContext);
}

// export function useAuthDispatch() {
//   return useContext(AuthDispatchContext);
// }
