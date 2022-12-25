import Navbar from "./Navbar";

export default function TightContainer(props) {
  return <div className="sm:max-w-3xl sm:mx-auto">{props.children}</div>;
}
