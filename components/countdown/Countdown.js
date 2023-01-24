import { Button } from "@mui/material";
import useCountdown from "../../hooks/useCountdown";
import CountdownBar from "./CountdownBar";
import tomatoService from "../../services/tomato";
import { useCookies } from "react-cookie";
import { useState } from "react";
import Card from "../ui/Card";
import StartPauseButton from "./StartPauseButton";
import TwoStateButton from "../ui/TwoStateButton";

export default function Countdown({ selectedStat }) {
  const { secondsRemaining, togglePause, paused, progress, resetTimer } =
    useCountdown(1500);
  // 1500 seconds -> 25 mins

  const [cookies, setCookie, removeCookie] = useCookies([""]);

  function handleCreateTomato() {
    tomatoService.create(cookies?.token, { selectedStat: selectedStat });
  }

  return (
    <div className=" border border-white">
      <div className="flex justify-center">
        <CountdownBar secondsRemaining={secondsRemaining} progress={progress} />
        {/* Hi there */}
      </div>
      {/* <Button onClick={handleCreateTomato}>Test send tomato</Button> */}
      <div className="flex justify-center">
        <TwoStateButton
          onClick={togglePause}
          isPressed={paused}
          pressedText="START"
          unpressedText="PAUSE"
          style={{ height: "36px" }}
        />
        {/* <StartPauseButton paused={paused} togglePause={togglePause} /> */}
      </div>
    </div>
  );
}
