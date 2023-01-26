export default function StartPauseButton(props) {
  const { paused, togglePause } = props;
  return (
    <div
      onClick={togglePause}
      className={`w-24 text-2xl bg-white text-black flex justify-center rounded-sm h-12 cursor-pointer`}
      style={{
        boxShadow: paused ? "rgb(235 235 235) 0px 6px 0px" : "",
        transform: paused ? "" : "translateY(6px)",
      }}
    >
      {paused ? "START" : "PAUSE"}
    </div>
  );
}
