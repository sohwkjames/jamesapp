import { STAT } from "../../constants/stats";
import StatButton from "./StatButton";

export default function Menu({ stats, handleSelectStat }) {
  console.log("in Menu, stats:", stats);
  return (
    <div className="flex justify-center">
      {stats &&
        stats.map((stat) => (
          <StatButton
            isSelected={stat.selected}
            title={stat.name}
            handleSelectStat={handleSelectStat}
          />
        ))}
    </div>
  );
}
