import { Button } from "@mui/material";
import useCountdown from "../../hooks/useCountdown";
import CountdownBar from "./CountdownBar";
import tomatoService from "../../services/tomato";
import { useCookies } from "react-cookie";
import { useState } from "react";
import Card from "../ui/Card";
import StartPauseButton from "./StartPauseButton";
import TwoStateButton from "../ui/TwoStateButton";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Submission from "../submission/Submission";

export default function Countdown({ selectedStat, handleLockStat, reset }) {
  const { secondsRemaining, togglePause, paused, progress, resetTimer } =
    useCountdown(600, handleCreateTomato);
  // 1500 seconds -> 25 mins

  const [cookies, setCookie, removeCookie] = useCookies([""]);

  function handleCreateTomato() {
    tomatoService.create(cookies?.token, selectedStat);
    // tomatoService.create(cookies?.token, { selectedStat: selectedStat });
  }

  function handleStartPress() {
    togglePause();
    handleLockStat();
  }

  function handleReset() {}

  return (
    <div className="flex flex-col">
      <div className="m-auto py-8">
        <CountdownBar secondsRemaining={secondsRemaining} progress={progress} />
        {/* Hi there */}
      </div>
      <div className="m-auto ">
        <TwoStateButton
          onClick={handleStartPress}
          isPressed={paused}
          pressedText="START"
          unpressedText="PAUSE"
          style={{ height: "36px" }}
        />

        {/* <StartPauseButton paused={paused} togglePause={togglePause} /> */}
      </div>

      {secondsRemaining === 0 && (
        <Submission className="py-5 m-auto" selectedStat={selectedStat} />
      )}
      {/* <RestartAltIcon onClick={handleReset} className="flex-end" /> */}
    </div>
  );
}
