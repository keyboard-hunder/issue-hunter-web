import React from "react";
import styled from "../typed-components";

interface Props {
  issue: IIssue;
  isActive: boolean;
  handleOnClickIssue: (issue: unknown) => void;
}

interface State {}

const Container = styled.div<{ isActive: boolean }>`
  width: 90%;
  background-color: ${({ isActive }) => (isActive ? "#427cff" : "white")};
  color: ${({ isActive }) => (isActive ? "white" : "black")};
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-radius: 0.5rem;
  transition: 0.5s ease-in-out;
`;

interface IIssue {
  body: string;
  id: number;
  num: number;
  repository: string;
  state: string;
  title: string;
}

export default class Issue extends React.Component<Props, State> {
  render() {
    const {
      isActive,
      issue: { title }
    } = this.props;
    console.log(this.props.issue);
    return (
      <Container
        isActive={isActive}
        onClick={() => this.props.handleOnClickIssue(1)}
      >
        {title}
      </Container>
    );
  }
}
