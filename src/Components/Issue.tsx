import React from "react";
import styled from "../typed-components";

interface Props {
  issue: unknown;
  isActive: boolean;
  handleOnClickIssue: (issue: unknown) => void;
}

interface State {}

const Container = styled.div``;

export default class Issue extends React.Component<Props, State> {
  render() {
    // const { isActive } = this.props;
    console.log(this.props.issue);
    return (
      <Container onClick={() => this.props.handleOnClickIssue(1)}>
        issue
      </Container>
    );
  }
}
