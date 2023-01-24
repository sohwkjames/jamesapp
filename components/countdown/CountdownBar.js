import {
  CircularProgressbarWithChildren,
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CountdownBar({ progress, secondsRemaining }) {
  return <h1 className="text-2xl">{secondsRemaining}</h1>;
}
