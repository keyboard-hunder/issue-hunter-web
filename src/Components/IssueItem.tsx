import React from "react";
import styled from "styled-components";
import { Tag as AtdTag } from "antd";

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

const Tag = styled(AtdTag)`
  font-weight: 700;
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
          키보드가 한 번 누를 시 무한대로 눌러지는 버그입니다.
        </IssueContent>
        <TagContainer>
          <Tag color="#f16524">HTML</Tag>
          <Tag color="#1da1f2">CSS</Tag>
          <Tag color="#fb9e21">JavaScript</Tag>
          <Tag color="#61dbfb">React</Tag>
        </TagContainer>
      </Container>
    );
  }
}
