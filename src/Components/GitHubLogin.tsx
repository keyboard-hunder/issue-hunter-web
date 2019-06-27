import React from "react";
import styled from "styled-components";
import { baseURL } from "../config/_mixin";

const Container = styled.button`
  font-weight: 700;
  padding: 0.5rem;
  background-color: white;
  width: 4rem;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
`;

const Icon = styled.i`
  font-size: 1.2rem;
`;

const Text = styled.div``;

interface Props {}

interface State {}

export default class GitHubLogin extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        <Link
          target="_blank"
          href={`https://github.com/login/oauth/authorize?client_id=11a01d2229799eeedf98&redirect_uri=${baseURL}/oauth`}
        >
          <Icon className="fab fa-github" />
          <Text>GitHub Login</Text>
        </Link>
      </Container>
    );
  }
}
