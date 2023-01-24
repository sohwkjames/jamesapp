import { useEffect, useState } from "react";
import ticketService from "../services/tickets";
import Layout from "../components/layout/Layout";
import { useAuth } from "../context/AuthContext";
import TightContainer from "../components/layout/TightContainer";
import Countdown from "../components/countdown/Countdown";
import Menu from "../components/home/Menu";

const defaultStats = [
  { name: "Workout", selected: false },
  { name: "Study", selected: false },
  { name: "Meditate", selected: false },
];

export default function Home() {
  const authContext = useAuth();
  const [showMenu, setShowMenu] = useState(true);
  const [stats, setStats] = useState(defaultStats);

  function handleSelectStat(statName) {
    const newStats = stats.map((stat) => {
      return {
        name: stat.name,
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

  return (
    <div>
      <div className="max-w-lg m-auto p-2">
        <div
          className="p-4 rounded-md"
          style={{ background: "rgba(255,255,255,0.1)" }}
        >
          {showMenu ? (
            <Menu stats={stats} handleSelectStat={handleSelectStat} />
          ) : (
            <></>
          )}
          <Countdown selectedStat={getSelectedStat} />
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
