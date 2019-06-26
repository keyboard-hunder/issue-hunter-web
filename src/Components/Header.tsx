import React from "react";
import styled from "styled-components";
import { Button } from "antd";

const Container = styled.div``;

const Logo = styled.div``;

interface State {}

interface Props {}

export default class Header extends React.Component<State, Props> {
  render() {
    return (
      <Container>
        <Logo>Keyboard Hunter</Logo>
        <Button type="primary">Sign In</Button>
        <Button>Log In</Button>
      </Container>
    );
  }
}
