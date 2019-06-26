import React from "react";
import styled from "styled-components";
import PLTag from "./PLTag";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 0.1rem;
  padding: 1rem;
  min-height: 6rem;
`;

const RepoText = styled.div`
  font-weight: 700;
`;

const IssueText = styled.div`
  font-size: 1.2rem;
  margin: 0.4rem 0;
`;

const IssueContent = styled.div`
  margin: 0.2rem 0;
`;

const TagContainer = styled.div`
  line-height: 2;
`;

interface Props {}

interface State {}

export default class IssueItem extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        <RepoText>Keyboard-hunter</RepoText>
        <IssueText>[KH] 키보드 버그</IssueText>
        <IssueContent>
          키보드가 한 번 누를 시 무한대로 눌러지는 버그입니다. 키보드가 한 번
          누를 시 무한대로 눌러지는 버그입니다. 키보드가 한 번 누를 시 무한대로
          눌러지는 버그입니다. 키보드가 한 번 누를 시 무한대로 눌러지는
          버그입니다.
        </IssueContent>
        <TagContainer>
          <PLTag pl="html" />
          <PLTag pl="css" />
          <PLTag pl="js" />
          <PLTag pl="react" />
        </TagContainer>
      </Container>
    );
  }
}
