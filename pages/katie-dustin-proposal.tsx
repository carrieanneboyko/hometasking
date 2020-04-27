import React from "react";
import styled from "styled-components";
import TimeStartsNow from "../components/TimeStartsNow";
import { TwitterVideoEmbed, TwitterTweetEmbed } from "react-twitter-embed";

import FullWidthHR from "../components/styled/FullWidthHR";

import { NextPage } from "next";

import "../styles/KatieDustinProposal.scss";

const MainStyle = styled.div`
  font-family: "Special Elite", Courier New, Courier, monospace;
  text-align: center;
  margin: auto;
`;

const KatieDustinProposal: NextPage<{}> = () => {
  return (
    <MainStyle>
      <TimeStartsNow text={"Your life together starts now."} />
      <FullWidthHR />
      <TwitterVideoEmbed id={"1254679206056910848"} />
      <FullWidthHR />
      <TimeStartsNow text={"Congratulations to Katie and Dustin"} />
      <TwitterTweetEmbed tweetId={`1254759582087462918`} />
    </MainStyle>
  );
};

export default KatieDustinProposal;
