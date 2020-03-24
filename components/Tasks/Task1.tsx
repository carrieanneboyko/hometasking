import React from "react";
import styled from "styled-components";
import CovidDos from "../CovidDos";
import VideoHolder from "../VideoHolder";
import Timer from "../Timer";
import addHours from "date-fns/addHours";
import FullWidthHR from "../styled/FullWidthHR";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Entries from "../Entries";

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

const Tasks: React.FC<{ entries?: any }> = ({ entries }) => {
  return (
    <MainStyle>
      <TaskmasterH1>Task #1</TaskmasterH1>
      <FullWidthHR />
      <VideoHolder
        src={`https://www.youtube.com/embed/7tJCKtyz47E`}
        isTaskmaster={true}
      ></VideoHolder>
      <TaskmasterTask>
        <p>Throw a piece of A4 paper into a bin.</p>
        <p>Most spectacular throw wins.</p>
        <p>One entry per household.</p>
        <p>You have 30 hours.</p>
        <p>Your time starts now.</p>
        <FullWidthHR />
        <TwitterTweetEmbed tweetId={`1242073477659668483`} />
      </TaskmasterTask>
      <Timer
        startTime={new Date("March 23, 2020, 9:00 GMT")}
        endTime={addHours(new Date("March 23, 2020, 9:00 GMT"), 30)}
      />
      <TaskmasterAddendum>
        <p>
          All tasks must be uploaded to Twitter with the hashtag "#HomeTasking"
          to be considered.
        </p>
        <p>Please keep your clip under one minute long.</p>
        <p>The Taskmaster's decision is final.</p>
      </TaskmasterAddendum>
      <FullWidthHR />
      <CovidDos />
      <FullWidthHR />
      <Entries entries={entries} />
    </MainStyle>
  );
};

export default Tasks;
