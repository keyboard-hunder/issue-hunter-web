import React from "react";
import styled from "styled-components";
import { BackTop } from "antd";
import Header from "./Components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./Routes/Home";
import IssueDetail from "./Routes/IssueDetail";
import { SharedContainer, SharedInnerContainer } from "./sharedStyle";

const Container = styled(SharedContainer)`
  padding: 1rem 1rem;
  background-color: #8db0d3;
`;

const InnerContainer = styled(SharedInnerContainer)`
  flex-direction: column;
  justify-content: flex-start;
`;

const SectionContainer = styled.section`
  width: 100%;
`;
interface Props {}

const Router: React.SFC<Props> = () => (
  <>
    <BackTop />
    <Container>
      <InnerContainer>
        <Header />
        <SectionContainer>
          <Switch>
            <Route path="/issue-detail/:issue_id" component={IssueDetail} />
            <Route path="/" component={Home} />
          </Switch>
        </SectionContainer>
      </InnerContainer>
    </Container>
  </>
);

export default Router;
