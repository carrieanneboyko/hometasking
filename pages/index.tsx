import React, { useState } from "react";
import styled from "styled-components";
import TimeStartsNow from "../components/TimeStartsNow";
import CovidDos from "../components/CovidDos";
import VideoHolder from "../components/VideoHolder";
import TaskList from "../components/Tasks/TaskList";
import FullWidthHR from "../components/styled/FullWidthHR";
import totalPoints from "../components/Tasks/points";
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
  if([11, 12, 13].includes(n % 100)){
    return `${n}th`
  }
  if(n % 10 === 1){
    return `${n}st`;
  }
  if(n % 10 === 2){
    return `${n}nd`
  }
  if(n % 10 === 3){
    return `${n}rd`
  }
  return `${n}th`
}

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
`
const IndexPage: React.FC<{}> = () => {
  const [isLeaderboardFull, setLeaderboardFull] = useState<boolean>(false);
  const toggleFullLeaderboard = () => setLeaderboardFull(!isLeaderboardFull);
  const reducedPoints = Object.values(totalPoints).reduce((pv, cv) => {
    for (let key in cv) {
      if (!pv[key]) {
        pv[key] = cv[key];
      } else {
        pv[key] += cv[key];
      }
    }
    return pv;
  }, {});
  return (
    <MainStyle>
      <NotTaskStyle>
        <div>
          Please forgive this very work in progress page. I'm kinda building
          this page as time allows (and working a full-time job as well -- from
          home, naturally.)
        </div>
        <div>Sincerely,</div>
        <div>
          The Taskmaster('s Assistant('s Assistant))<sup>*</sup>
        </div>
        <div>
          <sup>*</sup>
          <em>self-appointed</em>
        </div>
      </NotTaskStyle>
      <FullWidthHR />
      <TimeStartsNow />
      <HomeTaskingIntro />
      <FullWidthHR />

      <TaskList />
      <FullWidthHR />

      <TaskPointsContainer>
          <p>{isLeaderboardFull ? 'Full Leaderboards' : 'Leaderboards (Top Ten)'}</p>
        {Object.entries(reducedPoints)
          .sort(([_nameA, pointsA], [_nameB, pointsB]) => pointsB - pointsA)
          .slice(0, isLeaderboardFull ? Object.entries(reducedPoints).length : 10)
          .map(([name, points], index: number) => (
            <StyledPointsList key={name}>
              {`${positionFinder(index + 1)} - ${name}: `}
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
    </MainStyle>
  );
};

export default IndexPage;
