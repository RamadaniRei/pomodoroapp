import React from "react";
import { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { SettingsContext } from "../context/SettingsContext";

const CountdownAnimation = ({ timerKey, timer, animate, children }) => {
  const { stopAnimate } = useContext(SettingsContext);

  return (
    <CountdownCircleTimer
      key={timerKey}
      isPlaying={animate}
      duration={timer * 60}
      colors={[["#FE6F6B", 0.33]]}
      strokeWidth={6}
      size={220}
      trailColor="#151932"
      onComplete={() => {
        stopAnimate();
        return { shouldRepeat: false };
      }}
    >
      {children}
    </CountdownCircleTimer>
  );
};

export default CountdownAnimation;
