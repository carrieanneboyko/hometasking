import React from "react";
import styled from "styled-components";
import TimeStartsNow from "../components/TimeStartsNow";
import CovidDos from "../components/CovidDos";
import VideoHolder from "../components/VideoHolder";
import TaskList from "../components/Tasks/TaskList";
import FullWidthHR from "../components/styled/FullWidthHR";

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

const IndexPage: React.FC<{}> = () => (
  <MainStyle>
    <NotTaskStyle>
      <div>
        Please forgive this very work in progress page. I'm kinda building this
        page as time allows (and working a full-time job as well -- from home,
        naturally.)
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
    <CovidDos />
    <h3>Here's how long to wash your hands</h3>
    <WashHands />
  </MainStyle>
);

export default IndexPage;
