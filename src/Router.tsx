import React from "react";
import styled from "styled-components";
import { BackTop } from "antd";
import Header from "./Components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./Routes/Home";
import IssueDetail from "./Routes/IssueDetail";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const SectionContainer = styled.section`
  width: 100%;
  padding: 0 2rem;
`;
interface Props {}

const Router: React.SFC<Props> = () => (
  <>
    <BackTop />
    <MainContainer>
      <Header />
      <SectionContainer>
        <Switch>
          <Route path="/issue-detail/:issue_id" component={IssueDetail} />
          <Route path="/" component={Home} />
        </Switch>
      </SectionContainer>
    </MainContainer>
  </>
);

export default Router;
