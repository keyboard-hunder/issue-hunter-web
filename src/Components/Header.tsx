import React from "react";
import styled from "styled-components";
import Search from "./Search";
import { SharedContainer, SharedInnerContainer } from "../sharedStyle";
import GitHubLogin from "./GitHubLogin";
import { Link } from "react-router-dom";

const Container = styled(SharedContainer)`
  padding: 1rem 1rem;
  background-color: #8db0d3;
`;

const InnerContainer = styled(SharedInnerContainer)`
  justify-content: space-between;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  color: white;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 11rem;
  justify-content: space-between;
`;

interface State {}

interface Props {}

export default class Header extends React.Component<State, Props> {
  render() {
    return (
      <Container>
        <InnerContainer>
          <Logo>
            <Link to="/">Issue Hunter</Link>
          </Logo>
          <Search />
          <ButtonContainer>
            <GitHubLogin />
          </ButtonContainer>
        </InnerContainer>
      </Container>
    );
  }
}
