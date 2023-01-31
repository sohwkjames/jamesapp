import { useEffect, useState } from "react";
import ticketService from "../services/tickets";
import Layout from "../components/layout/Layout";
import { useAuth } from "../context/AuthContext";
import TightContainer from "../components/layout/TightContainer";
import Countdown from "../components/countdown/Countdown";
import Menu from "../components/home/Menu";

const defaultStats = [
  {
    name: "Workout",
    selected: true,
    locked: false,
    disabled: false,
    svgName: "exercise",
  },
  {
    name: "Study",
    selected: false,
    locked: false,
    disabled: false,
    svgName: "study",
  },
  {
    name: "Meditate",
    selected: false,
    locked: false,
    disabled: false,
    svgName: "meditate",
  },
];

export default function Home() {
  const [showMenu, setShowMenu] = useState(true);
  const [locked, setLocked] = useState(false);
  const [stats, setStats] = useState(defaultStats);
  const [selectedStat, setSelectedStat] = useState({});

  function handleSelectStat(statName) {
    if (locked) {
      return;
    }
    const newStats = stats.map((stat) => {
      return {
        ...stat,
        selected: stat.name === statName ? true : false,
      };
    });
    setStats(newStats);
  }

  function getSelectedStat() {
    let result;
    stats.forEach((stat) => {
      if (stat.selected) {
        result = stat.name;
      }
    });
    return result;
  }

  function resetLockState() {
    setLocked(false);
  }

  function handleLockStat(statName) {
    const newStats = stats.map((stat) => {
      return {
        ...stat,
        locked: stat.selected ? true : false,
        disabled: stat.selected ? false : true,
      };
    });
    setStats(newStats);
    setLocked(true);
  }

  return (
    <div>
      <div className="max-w-lg m-auto p-2">
        <div
          className="p-4 rounded-md"
          style={{ background: "rgba(255,255,255,0.1)" }}
        >
          {showMenu ? (
            <Menu
              stats={stats}
              handleSelectStat={handleSelectStat}
              locked={locked}
            />
          ) : (
            <></>
          )}
          <Countdown
            selectedStat={getSelectedStat()}
            handleLockStat={handleLockStat}
            resetLockState={resetLockState}
          />
        </div>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <TightContainer>{page}</TightContainer>
    </Layout>
  );
};
