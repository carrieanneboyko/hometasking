import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { format } from "date-fns";
import differenceInMilliseconds from "date-fns/differenceInMilliseconds";

const StyledTimer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const StyledTimestamp = styled.div`
  font-family: "Special Elite", Courier New, Courier, monospace;
  padding-bottom: 10px;
`;
const StyledCountdownFlex = styled.div`
  display: flex;
`;
const StyledCountdown = styled.div<{ prep?: boolean }>`
  font-family: "Titillium Web", Helvetica, Arial, sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: ${({ prep }) => (prep ? `green` : `red`)};
  background-color: black;
  border-radius: 5px;
  border: 0px solid transparent;
  padding: 0px 20px;
`;

const StyledTimeExpired = styled.h3`
  font-family: "Special Elite", Courier New, Courier, monospace;
  padding: 0px 20px;
`;

const TIME = {
  minutes: 60,
  get hours() {
    return this.minutes * 60;
  },
  get days() {
    return this.hours * 24;
  }
};

interface TimerProps {
  startTime: Date | string;
  endTime: Date | string;
}

const timeToEnglish = (time: Date): string =>
  format(time, `yyyy LLLL do, HH:mm (OOOO)`);

const padNumber = (num: number): string => {
  if (num < 10) {
    return `0${num}`;
  }
  return num.toString();
};

const msToDuration = (durationInMs: number) => {
  if (durationInMs <= 0) {
    return `0:00`;
  }
  const baseSeconds = Math.floor(durationInMs / 1000);
  const days = Math.floor(baseSeconds / TIME.days);
  const hours = Math.floor((baseSeconds % TIME.days) / TIME.hours);
  const minutes = Math.floor((baseSeconds % TIME.hours) / TIME.minutes);
  const seconds = Math.floor(baseSeconds % TIME.minutes);
  if (days > 0) {
    return `${days}:${padNumber(hours)}:${padNumber(minutes)}:${padNumber(
      seconds
    )}`;
  }
  if (hours > 0) {
    return `${hours}:${padNumber(minutes)}:${padNumber(seconds)}`;
  }
  return `${minutes}:${padNumber(seconds)}`;
};

const Timer: React.FC<TimerProps> = ({ startTime, endTime }) => {
  const sTime: Date =
    startTime instanceof Date ? startTime : new Date(startTime);
  const eTime: Date = endTime instanceof Date ? endTime : new Date(endTime);

  const isPrep = new Date().valueOf() < sTime.valueOf();
  const timeLeftInMs = (): number => {
    if (isPrep) {
      return differenceInMilliseconds(sTime, new Date());
    }
    return differenceInMilliseconds(eTime, new Date());
  };

  const [countDown, setCountdown] = useState<string>(
    msToDuration(timeLeftInMs())
  );
  const [expired, setExpired] = useState<boolean>(false);
  const handleCountdown = (timeLeft: number, clockInterval: number) => {
    if (timeLeft <= 0 && !isPrep) {
      clearInterval(clockInterval);
      setExpired(true);
    } else {
      setCountdown(msToDuration(timeLeft));
    }
  };
  useEffect(() => {
    let clockInterval = setInterval(() => {
      handleCountdown(timeLeftInMs(), clockInterval);
    }, 1000);
    return () => clearInterval(clockInterval);
  }, [startTime, endTime]);
  return (
    <StyledTimer>
      <StyledTimestamp>{`Start: ${timeToEnglish(sTime)}`}</StyledTimestamp>
      <StyledTimestamp>{`End: ${timeToEnglish(eTime)}`}</StyledTimestamp>
      {expired ? (
        <StyledTimeExpired>Your time has expired.</StyledTimeExpired>
      ) : (
        <StyledCountdownFlex>
          <StyledCountdown prep={isPrep}>{countDown}</StyledCountdown>
        </StyledCountdownFlex>
      )}
    </StyledTimer>
  );
};

export default Timer;
