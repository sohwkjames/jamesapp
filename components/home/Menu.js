import { STAT } from "../../constants/stats";
import StatButton from "./StatButton";

export default function Menu({ stats, handleSelectStat }) {
  return (
    <div className="flex justify-center">
      {stats &&
        stats.map((stat) => (
          <StatButton
            key={Math.random()}
            isSelected={stat.selected}
            title={stat.name}
            handleSelectStat={handleSelectStat}
            locked={stat.locked}
            svgName={stat.svgName}
          />
        ))}
    </div>
  );
}
