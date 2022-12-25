import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useAuth, useAuthDispatch } from "../../context/AuthContext";

export default function Layout(props) {
  const authContext = useAuth();
  const { username, isAuthenticated } = authContext;
  console.log("Layout username:", username, isAuthenticated);

  // This undefined check is needed to 
  // prevent the "New User" flashing for half a second.
  let nameToDisplay;
  if (isAuthenticated?.valueOf() === undefined) {
    nameToDisplay = "";
  } else if (isAuthenticated === false) {
    nameToDisplay = "New User";
  } else {
    nameToDisplay = username;
  }

  return (
    <div className="h-screen bg-white">
      {/* <Navbar /> */}
      <nav className="border-1 border-black -p2 ">{nameToDisplay}</nav>
      <div>{props.children}</div>
    </div>
  );
}
