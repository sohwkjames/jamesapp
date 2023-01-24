import { useEffect, useRef, useState } from "react";

export default function useCountdown(
  seconds = 100,
  onCountdownComplete = () => {}
) {
  // This hook takes a target amount of seconds
  // Starts a countdown for the target seconds
  // Returns remaining time in seconds.
  // onCountdownComplete is called when countdown is completed.

  const [secondsRemaining, setSecondsRemaining] = useState(seconds);
  const [paused, setPaused] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  // console.log('in useCountdown, seconds / secondsRemaining', seconds / secondsRemaining)
  function togglePause() {
    setPaused(!paused);
  }

  function resetTimer() {
    // console.log("calling resetTimer, seconds:", seconds);
    setSecondsRemaining(seconds);
  }

  // Returns a value from 0 to 100.
  // function progress() {
  //   return (secondsRemaining / seconds) * 100;
  // }

  const progress = (secondsRemaining / seconds) * 100;

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isComplete) {
        return;
      }

      if (secondsRemaining === 0) {
        setIsComplete(true);
        setPaused(true);
        return;
      }

      if (!paused) {
        setSecondsRemaining(secondsRemaining - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [secondsRemaining, paused]);

  return {
    secondsRemaining,
    togglePause,
    onCountdownComplete,
    resetTimer,
    paused,
    progress,
  };
}
