import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <div>
      <Navbar />
      <div>{props.children}</div>
    </div>
  );
}
