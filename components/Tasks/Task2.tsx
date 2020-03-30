import React from "react";
import styled from "styled-components";
import CovidDos from "../CovidDos";
import VideoHolder from "../VideoHolder";
import Timer from "../Timer";
import addHours from "date-fns/addHours";
import FullWidthHR from "../styled/FullWidthHR";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Entries from "../Entries";
import { task2Points } from "./points";

const StyledPointsList = styled.div`
  padding: 10px;
`;
const StyledSeal = styled.span`
  padding: 5px;
  margin: 5px;
  border-radius: 50%;
  color: white;

  background-color: red;
`;

const MainStyle = styled.div`
  font-family: "Special Elite", Courier New, Courier, monospace;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TaskmasterH1 = styled.h1`
  font-family: "Special Elite";
`;

const TaskmasterTask = styled.div`
  font-family: "Special Elite";
  max-width: 600px;
  margin: 10px;
  border: 1px dotted grey;
  padding: 20px;
  text-align: center;
`;
const TaskmasterAddendum = styled.div`
  font-family: "Special Elite";
`;

const Tasks: React.FC<{}> = () => {
  return (
    <MainStyle>
      <TaskmasterH1>Task #2</TaskmasterH1>
      <FullWidthHR />
      <VideoHolder
        src={`https://www.youtube.com/embed/BBWmRvIT0QY`}
        isTaskmaster={true}
      ></VideoHolder>
      <TaskmasterTask>
        <p>
          Turn your bathroom into the sort of venue you might visit for a great
          night out.
        </p>
        <p>Best bathroom conversion wins.</p>
        <p>You have 30 hours.</p>
        <p>Your time starts now.</p>
        <FullWidthHR />
      </TaskmasterTask>
      <Timer
        startTime={new Date("March 25, 2020, 9:00 GMT")}
        endTime={addHours(new Date("March 25, 2020, 9:00 GMT"), 30)}
      />
      <TaskmasterAddendum>
        <p>
          All tasks must be uploaded to Twitter with the hashtag "#HomeTasking"
          to be considered.
        </p>
        <p>Please keep your clip under 20 seconds if possible.</p>
        <p>The Taskmaster's decision is final.</p>
      </TaskmasterAddendum>
      <FullWidthHR />
      <TaskmasterH1>Results</TaskmasterH1>
      <VideoHolder
        src={`https://www.youtube.com/embed/7tKIKdHB06k`}
        isTaskmaster={true}
      ></VideoHolder>
      <TaskmasterTask>
        <p>Task #2 Points</p>
        {Object.entries(task2Points)
          .sort(([_nameA, pointsA], [_nameB, pointsB]) => pointsA - pointsB)
          .map(([name, points]) => (
            <StyledPointsList>
              {`${name}: `}
              <StyledSeal>{points}</StyledSeal>
            </StyledPointsList>
          ))}
      </TaskmasterTask>
      <FullWidthHR /> <CovidDos />
      <FullWidthHR />
    </MainStyle>
  );
};

export default Tasks;
