import { useEffect, useRef, useState } from "react";

export default function useCountdown(seconds = 100) {
  // This hook takes a target amount of seconds
  // Starts a countdown for the target seconds
  // Returns remaining time in seconds
  const [secondsRemaining, setSecondsRemaining] = useState(seconds);
  const [paused, setPaused] = useState(false);

  function togglePause() {
    setPaused(!paused);
  }

  useEffect(() => {
    // if (!secondsRemaining) return;

    const intervalId = setInterval(() => {
      setSecondsRemaining(secondsRemaining - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [secondsRemaining]);

  return { secondsRemaining, togglePause };
}
