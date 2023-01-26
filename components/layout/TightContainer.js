import Navbar from "./Navbar";

export default function TightContainer(props) {
  return <div className="sm:max-w-2xl sm:mx-auto">{props.children}</div>;
}
