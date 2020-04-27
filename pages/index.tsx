import React, { useState } from "react";
import styled from "styled-components";
import TimeStartsNow from "../components/TimeStartsNow";
import CovidDos from "../components/CovidDos";
import VideoHolder from "../components/VideoHolder";
import TaskList from "../components/Tasks/TaskList";
import FullWidthHR from "../components/styled/FullWidthHR";
import pointsDb from "../db/Points";
import tasksDb from "../db/Tasks";

import { NextPage, GetServerSideProps } from "next";

const MainStyle = styled.div`
  font-family: "Special Elite", Courier New, Courier, monospace;
  text-align: center;
`;
const NotTaskStyle = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  text-align: left;
`;

const WashHands: React.FC<{}> = () => (
  <VideoHolder
    isTaskmaster={false}
    src={`https://www.youtube.com/embed/AWZCcwJZses`}
  />
);

const HomeTaskingIntro: React.FC<{}> = () => (
  <VideoHolder
    isTaskmaster={true}
    src={`https://www.youtube.com/embed/_DQ32Vahb1E`}
  />
);

const positionFinder = (n: number): string => {
  if ([11, 12, 13].includes(n % 100)) {
    return `${n}th`;
  }
  if (n % 10 === 1) {
    return `${n}st`;
  }
  if (n % 10 === 2) {
    return `${n}nd`;
  }
  if (n % 10 === 3) {
    return `${n}rd`;
  }
  return `${n}th`;
};

const TaskPointsContainer = styled.div`
  font-family: "Special Elite";
  max-width: 600px;
  margin: 10px;
  background: rgba(0, 0, 0, 0.1);
  margin: auto;
  padding: 20px;
  text-align: center;
`;

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

const StyledClickable = styled.a`
  text-decoration: underline;
  color: blue;
`;
const IndexPage: NextPage<{
  leaderboard: Record<string, number>;
  taskDescriptions: Array<{ id: number; description: string }>;
}> = ({ leaderboard, taskDescriptions }) => {
  console.log(taskDescriptions);
  const [isLeaderboardFull, setLeaderboardFull] = useState<boolean>(false);
  const [isLeaderboardAlphabetical, setLeaderboardAlphabetical] = useState<
    boolean
  >(false);
  const toggleFullLeaderboard = () => setLeaderboardFull(!isLeaderboardFull);
  const toggleAlphabetical = () =>
    setLeaderboardAlphabetical(!isLeaderboardAlphabetical);
  const sortByName = isLeaderboardAlphabetical && isLeaderboardFull;

  return (
    <MainStyle>
      <TimeStartsNow />
      <HomeTaskingIntro />
      <FullWidthHR />

      <TaskList taskDescriptions={taskDescriptions} />
      <FullWidthHR />
      <StyledClickable
        href="https://docs.google.com/spreadsheets/d/1VvOh2ruA75sLL9DoDrZO28BYEcUTo9b3CykDjFm74cM/edit#gid=0"
        target="_blank"
      >
        @JennyThyer's Full Results Spreadsheet
      </StyledClickable>
      <TaskPointsContainer>
        <p>
          {isLeaderboardFull ? "Full Leaderboards" : "Leaderboards (Top Ten)"}
        </p>
        {isLeaderboardFull ? (
          <StyledClickable onClick={toggleAlphabetical}>
            {isLeaderboardAlphabetical
              ? "Sort Leaderboard by Points"
              : "Sort Leaderboard Alphabetically"}
          </StyledClickable>
        ) : null}
        {Object.entries(leaderboard)
          .sort(([nameA, pointsA], [nameB, pointsB]) => {
            if (!sortByName) {
              return pointsB - pointsA;
            } else if (nameA.toLowerCase() < nameB.toLowerCase()) {
              return -1;
            } else if (nameA.toLowerCase() > nameB.toLowerCase()) {
              return 1;
            }
            return 0;
          })
          .slice(0, isLeaderboardFull ? Object.entries(leaderboard).length : 10)
          .map(([name, points], index: number) => (
            <StyledPointsList key={name}>
              {sortByName
                ? `${name}: `
                : `${positionFinder(index + 1)} - ${name}: `}
              <StyledSeal>{points}</StyledSeal>
            </StyledPointsList>
          ))}
        <p>
          <StyledClickable onClick={toggleFullLeaderboard}>{`${
            isLeaderboardFull ? "Collapse" : "Expand"
          } Leaderboard`}</StyledClickable>
        </p>
      </TaskPointsContainer>
      <FullWidthHR />
      <CovidDos />
      <h3>Here's how long to wash your hands</h3>
      <WashHands />

      <FullWidthHR />
      <TimeStartsNow text={`News & Specialised Tasks`} />

      <StyledClickable href="/katie-dustin-proposal" target="_blank">
        {`Katie & Dustin's Proposal`}
      </StyledClickable>
    </MainStyle>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { getAllPoints } = pointsDb("tasks");
  const { getAllTaskDescriptions } = tasksDb("tasks");
  const leaderboard = await getAllPoints();
  const taskDescriptions = await getAllTaskDescriptions();

  return { props: { leaderboard, taskDescriptions } };
};

export default IndexPage;
