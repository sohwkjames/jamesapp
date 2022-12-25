import useCountdown from "../../hooks/useCountdown";

export default function Countdown() {
  const { secondsRemaining, togglePause } = useCountdown(100);

  return <div>Countdown works! {secondsRemaining}</div>;
}
