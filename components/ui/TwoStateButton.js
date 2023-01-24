export default function TwoStateButton({
  isPressed,
  onClick,
  pressedText,
  unpressedText,
  // height,
  style,
  ...props
}) {
  return (
    <div
      onClick={onClick}
      className={`w-24 text-2xl bg-white text-black flex justify-center rounded-sm h-8`}
      style={{
        boxShadow: isPressed ? "rgb(235 235 235) 0px 6px 0px" : "",
        transform: isPressed ? "" : "translateY(6px)",
        // height: height ? height : "",
        ...style,
      }}
      {...props}
    >
      {isPressed ? pressedText : unpressedText}
    </div>
  );
}
