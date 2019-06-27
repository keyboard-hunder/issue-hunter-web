import React from "react";
import styled from "styled-components";
import Search from "./Search";
import { SharedContainer, SharedInnerContainer } from "../sharedStyle";

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

const Button = styled.button`
  font-weight: 700;
  padding: 0.5rem;
`;

interface State {}

interface Props {}

export default class Header extends React.Component<State, Props> {
  render() {
    return (
      <Container>
        <InnerContainer>
          <Logo>Keyboard Hunter</Logo>
          <Search />
          <ButtonContainer>
            <Button style={{ color: "white", backgroundColor: "black" }}>
              Sign In
            </Button>
            <Button>Log In</Button>
          </ButtonContainer>
        </InnerContainer>
      </Container>
    );
  }
}
