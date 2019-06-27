import React from "react";
import styled from "styled-components";

const ArrowIcon = styled.i`
  font-size: 1.5rem;
  margin-right: 0.5rem;
  transition: 0.5s ease-in-out;
`;

const Container = styled.div`
  width: 90%;
  background-color: white;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  direction: ltr;
  position: relative;
  border-radius: 0.5rem;
  :after {
    content: "";
    position: absolute;
    border-style: solid;
    /* reduce the damage in FF3.0 */
    display: block;
    width: 0;

    top: 50%; /* controls vertical position */
    transform: translateY(-50%);
    right: -0.5rem; /* value = - border-left-width - border-right-width */
    bottom: auto;
    left: auto;
    border-width: 0.5rem 0 0.5rem 0.5rem;
    border-color: transparent white;
  }
  cursor: pointer;
  &:hover {
    ${ArrowIcon} {
      margin-right: 0rem;
    }
  }
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const GitHubIcon = styled.i`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

interface Props {
  repository: any;
  handleOnClickRepository: (repo: unknown) => void;
}

interface State {}

export default class Repository extends React.Component<Props, State> {
  render() {
    const {
      repository: { name }
    } = this.props;
    return (
      <Container onClick={() => this.props.handleOnClickRepository(name)}>
        <LeftContainer>
          <GitHubIcon className="fab fa-github" />
          {name}
        </LeftContainer>
        <ArrowIcon className="fas fa-chevron-right" />
      </Container>
    );
  }
}
