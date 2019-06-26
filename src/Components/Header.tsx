import React from "react";
import styled from "styled-components";
import { Button as AtdButton } from "antd";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between
  width: 100%;
  min-width: 30rem;
  padding: 0.5rem;
`;

const Logo = styled.div`
  margin-right: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled(AtdButton)`
  margin: 0 0.5rem;
`;

interface State {}

interface Props {}

export default class Header extends React.Component<State, Props> {
  render() {
    return (
      <Container>
        <Logo>Keyboard Hunter</Logo>
        <ButtonContainer>
          <Button type="primary">Sign In</Button>
          <Button>Log In</Button>
        </ButtonContainer>
      </Container>
    );
  }
}
