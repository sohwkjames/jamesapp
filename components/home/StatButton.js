export default function StatButton({ title, isSelected, handleSelectStat }) {
  console.log("StatButton, title", title);

  const selectedCss = "px-4 font-bold rounded-sm cursor-pointer";
  const normalCss = "px-4 cursor-pointer";

  return (
    <div
      onClick={() => handleSelectStat(title)}
      className={isSelected ? selectedCss : normalCss}
      style={{
        background: isSelected ? "rgba(1,1,1,0.15)" : "none",
      }}
    >
      <span>{title}</span>
    </div>
  );
}
