import React from "react";
import styled from "styled-components";
import CovidDos from "../CovidDos";
import VideoHolder from "../VideoHolder";
import Timer from "../Timer";
import addHours from "date-fns/addHours";
import FullWidthHR from "../styled/FullWidthHR";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Entries from "../Entries";
import { task1Points } from "./points";

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

const StyledPointsList = styled.div`
  padding: 10px;
`
const StyledSeal = styled.span`
  padding: 5px; 
  margin: 5px;
  border-radius: 50%;
  color: white;

  background-color: red;
`

const Tasks: React.FC<{ entries?: any }> = ({ entries }) => {
  return (
    <MainStyle>
      <TaskmasterH1>Task #3</TaskmasterH1>
      <FullWidthHR />
      <VideoHolder
        src={`https://www.youtube.com/embed/xvuLmf9QPS0`}
        isTaskmaster={true}
      ></VideoHolder>
      <TaskmasterTask>
        <p>Make the best dancing elephant.</p>
        <p>You have six hours</p>
        <p>Your time starts now</p>
        <FullWidthHR />
      </TaskmasterTask>
      <Timer
        startTime={new Date("March 27, 2020, 9:00 GMT")}
        endTime={addHours(new Date("March 27, 2020, 9:00 GMT"), 6)}
      />
      {/* <TwitterTweetEmbed tweetId={`1242466255388336128`} /> */}

      <TaskmasterAddendum>
        <p>
          All tasks must be uploaded to Twitter with the hashtag "#HomeTasking"
          to be considered.
        </p>
        <p>Please keep your clip under 20 seconds long.</p>
        <p>The Taskmaster's decision is final.</p>
      </TaskmasterAddendum>
      <FullWidthHR />
      {/* <TaskmasterH1>Results</TaskmasterH1>
      <VideoHolder
        src={`https://www.youtube.com/embed/z0-C5GH_yxU`}
        isTaskmaster={true}
      ></VideoHolder>
      <TaskmasterTask>
        <p>Task #1 Points</p>
        {Object.entries(task1Points)
          .sort(([_nameA, pointsA], [_nameB, pointsB]) => pointsA - pointsB)
          .map(([name, points]) => (
            <StyledPointsList>
              {`${name}: `}
              <StyledSeal>{points}</StyledSeal>
            </StyledPointsList>
          ))}
      </TaskmasterTask> */}
      <FullWidthHR />
      <CovidDos />
      <FullWidthHR />
    </MainStyle>
  );
};

export default Tasks;
