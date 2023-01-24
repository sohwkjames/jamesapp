import Navbar from "./Navbar";

export default function TightContainer(props) {
  return (
    <div className="sm:max-w-2xl sm:mx-auto border-2 border-blue">
      {props.children}
    </div>
  );
}
