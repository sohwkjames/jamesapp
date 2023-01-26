import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import SelfImprovementOutlinedIcon from "@mui/icons-material/SelfImprovementOutlined";

export default function StatButton({
  title,
  isSelected,
  handleSelectStat,
  locked,
  svgName,
}) {
  const selectedCss =
    "inline px-4 font-bold rounded-md cursor-pointer flex flex-col items-center w-1/3";
  const normalCss =
    "inline px-4 cursor-pointer flex flex-col items-center w-1/3";

  return (
    <div
      onClick={locked ? () => {} : () => handleSelectStat(title)}
      className={isSelected ? selectedCss : normalCss}
      style={{
        background: isSelected ? "rgba(1,1,1,0.25)" : "none",
        border: locked ? "border 2px white" : "",
      }}
    >
      {/* {svgName && <img className="max-w-[50px]" src={`/${svgName}`}></img>} */}
      {svgName === "study" && <MenuBookOutlinedIcon />}
      {svgName === "exercise" && <FitnessCenterOutlinedIcon />}
      {svgName === "meditate" && <SelfImprovementOutlinedIcon />}
      <span>{title}</span>
    </div>
  );
}
