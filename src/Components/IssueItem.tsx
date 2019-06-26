import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  min-height: 6rem;
`;

const RepoText = styled.div`
  font-weight: 700;
`;

const IssueText = styled.div`
  font-size: 1.2rem;
`;

const IssueContent = styled.div``;

interface Props {}

// interface Issue {
//   id: string;
//   name: string;
//   content: string;
// }

interface State {}

export default class IssueItem extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        <RepoText>Keyboard-hunter</RepoText>
        <IssueText>Keyboard Bug!!!</IssueText>
        <IssueContent>Keyboard issue, please help me!</IssueContent>
      </Container>
    );
  }
}
