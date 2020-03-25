import React from "react";
import styled from "styled-components";

import sixFeet from '../../utils/sixFeet';

const CenteredRules = styled.div`
  text-align: center;
`;
const StyledRule = styled.li`
  padding-bottom: 10px;
`;
const StyledRuleList = styled.ul`
  padding-top: 20px;
  max-width: 600px;
  width: 90%;
  text-align: left;
  margin: auto;
  padding-bottom: 15px;
`;
const CovidDos: React.FC<{}> = () => {
  return (
    <CenteredRules>
      <div>During all tasks, the following rules are in effect.</div>
      <div>
        Failure to follow these rules may result in infection and worse,
        disqualification from the task.
      </div>

      <StyledRuleList>
        <StyledRule>
          All the tasks should take place in your homes or gardens.
        </StyledRule>
        <StyledRule>
          Obey the social distancing advice and keep at least 2 meters (or{` `}
          {sixFeet()}) away from people not in your household.
        </StyledRule>
        <StyledRule>Do not break the law.</StyledRule>
        <StyledRule>Don't hurt anyone.</StyledRule>
        <StyledRule>Make good choices.</StyledRule>
        <StyledRule>Use your imagination.</StyledRule>
        <StyledRule>Have fun.</StyledRule>
      </StyledRuleList>
      <img src="/img/taskmaster-seal.png" />
    </CenteredRules>
  );
};

export default CovidDos;
