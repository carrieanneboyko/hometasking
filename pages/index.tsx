import React from "react";
import TimeStartsNow from "../components/TimeStartsNow";
import CovidDos from "../components/CovidDos";
import VideoHolder from "../components/VideoHolder";
import styled from "styled-components";

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
const Task1Video: React.FC<{}> = () => (
  <VideoHolder
    isTaskmaster={true}
    src="https://www.youtube.com/embed/7tJCKtyz47E"
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
    <hr />
    <TimeStartsNow />
    <HomeTaskingIntro />
    <CovidDos />
    <Task1Video />
    <h3>Here's how long to wash your hands</h3>
    <WashHands />
  </MainStyle>
);

export default IndexPage;
