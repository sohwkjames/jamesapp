import { useAuth, useAuthDispatch } from "../../context/AuthContext";
import { useCookies } from "react-cookie";
import TightContainer from "./TightContainer";

export default function Layout(props) {
  const authContext = useAuth();
  const [cookies, setCookie, removeCookie] = useCookies([""]);
  const { username, isAuthenticated } = authContext;

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
    <div className="h-screen bg-green-900 text-white">
      {/* <Navbar /> */}
      <TightContainer>
        <nav className="p-2 flex justify-between">
          <div className="font-medium">{nameToDisplay}</div>
          <div>Sign out</div>
        </nav>
        <div>{props.children}</div>
      </TightContainer>
    </div>
  );
}
