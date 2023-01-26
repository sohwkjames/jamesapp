import {
  CircularProgressbarWithChildren,
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CountdownBar({ progress, secondsRemaining }) {
  let secondsDisplay = secondsRemaining % 60;
  if (secondsDisplay < 10) {
    secondsDisplay = "0" + secondsDisplay;
  }
  const minuteDisplay = parseInt(secondsRemaining / 60);

  return (
    <div>
      <h1 className="text-7xl">
        {minuteDisplay}:{secondsDisplay}
      </h1>
    </div>
  );
}
