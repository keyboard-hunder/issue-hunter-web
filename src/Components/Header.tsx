import React from "react";
import styled from "styled-components";
import { SharedContainer, SharedInnerContainer } from "../sharedStyle";
import { Link } from "react-router-dom";
import Logo from "../static/logo.svg";

const Container = styled(SharedContainer)`
  padding: 1rem 1rem;
  background-color: #4e7cff;
`;

const InnerContainer = styled(SharedInnerContainer)`
  justify-content: space-between;
`;

interface State {}

interface Props {}

export default class Header extends React.Component<State, Props> {
  render() {
    return (
      <Container>
        <InnerContainer>
          <Link to="/">
            <img src={Logo} />
          </Link>
        </InnerContainer>
      </Container>
    );
  }
}
