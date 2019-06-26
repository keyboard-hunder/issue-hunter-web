import React from "react";
import styled from "styled-components";
import { Button as AtdButton } from "antd";
import Search from "./Search";

const Container = styled.div`
  width: 100%;
  padding: 1rem 1rem;
  background-color: #8db0d3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div`
  min-width: 30rem;
  max-width: 50rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  color: white;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled(AtdButton)`
  margin: 0 0.2rem;
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
            <Button type="primary">Sign In</Button>
            <Button>Log In</Button>
          </ButtonContainer>
        </InnerContainer>
      </Container>
    );
  }
}
