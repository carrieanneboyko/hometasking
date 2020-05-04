import React from "react";
import styled from "styled-components";
import NiteFort from "../../../components/TaskEntryPage/NiteFort";

import { NextPage } from "next";

import "../../../styles/KatieDustinProposal.scss";

const MainStyle = styled.div`
  font-family: "Special Elite", Courier New, Courier, monospace;
  text-align: center;
  margin: auto;
`;

const KatieDustinProposal: NextPage<{}> = () => {
  return (
    <MainStyle>
      <NiteFort />
    </MainStyle>
  );
};

export default KatieDustinProposal;
