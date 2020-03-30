import React from "react";
import styled from "styled-components";
import CovidDos from "../CovidDos";
import VideoHolder from "../VideoHolder";
import Timer from "../Timer";
import addHours from "date-fns/addHours";
import FullWidthHR from "../styled/FullWidthHR";
import { TwitterTweetEmbed } from "react-twitter-embed";
// import Entries from "../Entries";
// import { task3Points } from "./points";

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

const Tasks: React.FC<{}> = () => {
  return (
    <MainStyle>
      <TaskmasterH1>Task #3</TaskmasterH1>
      <FullWidthHR />
      <VideoHolder
        src={`https://www.youtube.com/embed/xnfSBFM3mvs`}
        isTaskmaster={true}
      ></VideoHolder>
      <TaskmasterTask>
        <p>Camouflage yourself, and then reveal yourself.</p>
        <p>Please don't misinterpret "reveal yourself"</p>
        <p>Best camouflage wins.</p>

        <p>You have thirty hours</p>
        <p>Your time starts now</p>
        <FullWidthHR />
      </TaskmasterTask>
      <Timer
        startTime={new Date("March 30, 2020, 9:00 GMT")}
        endTime={addHours(new Date("March 30, 2020, 9:00 GMT"), 30)}
      />

      <TaskmasterAddendum>
        <p>
          All tasks must be uploaded to Twitter with the hashtag "#HomeTasking"
          to be considered.
        </p>
        <p>Please keep your clip under 20 seconds long.</p>
        <p>Please film landscape mode/horizontal not portrait mode/vertical, if you are able.</p>

        <p>The Taskmaster's decision is final.</p>
      </TaskmasterAddendum>
      <FullWidthHR />
      {/* <TaskmasterH1>Results</TaskmasterH1>
      <VideoHolder
        src={`https://www.youtube.com/embed/v8y_tXnuCCw`}
        isTaskmaster={true}
      ></VideoHolder>
      <TaskmasterTask>
        <p>Task #3 Points</p>
        {Object.entries(task3Points)
          .sort(([_nameA, pointsA], [_nameB, pointsB]) => pointsA - pointsB)
          .map(([name, points]) => (
            <StyledPointsList>
              {`${name}: `}
              <StyledSeal>{points}</StyledSeal>
            </StyledPointsList>
          ))}
      </TaskmasterTask>
      <FullWidthHR /> */}
      <CovidDos />
      <FullWidthHR />
    </MainStyle>
  );
};

export default Tasks;
