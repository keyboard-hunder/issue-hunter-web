import React from "react";
import styled from "styled-components";
import PLTag from "./PLTag";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  background-color: white;
  border-radius: 0.3rem;
  padding: 1rem;
  min-height: 6rem;
`;

const RepoText = styled.div`
  font-weight: 700;
`;

const IssueText = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0.4rem 0;
  cursor: pointer;
`;

const IssueContent = styled.div`
  margin: 0.2rem 0 1rem 0;
`;

const TagContainer = styled.div`
  line-height: 2;
`;

const NumericContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 15rem;
  margin-right: 0.5rem;
  color: grey;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const NumericItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 3rem;
  font-weight: 700;
`;
const NumericText = styled.div`
  font-size: 1rem;
`;

const NumericNum = styled.i`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

interface Props {}

interface State {}

export default class IssueItem extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        <NumericContainer>
          <NumericItem>
            <NumericNum> 1</NumericNum>
            <NumericText>조회수</NumericText>
          </NumericItem>
          <NumericItem>
            <NumericNum> 1</NumericNum>
            <NumericText>댓글</NumericText>
          </NumericItem>
          <NumericItem>
            <NumericNum> 0.002</NumericNum>
            <NumericText>현상금</NumericText>
          </NumericItem>
        </NumericContainer>
        <MainContainer>
          <RepoText>Keyboard-hunter</RepoText>
          <IssueText>
            <Link to="/issue-detail/1">[KH] 키보드 버그</Link>
          </IssueText>
          <IssueContent>
            키보드가 한 번 누를 시 무한대로 눌러지는 버그입니다. 키보드가 한 번
            누를 시 무한대로 눌러지는 버그입니다. 키보드가 한 번 누를 시
            무한대로 눌러지는 버그입니다. 키보드가 한 번 누를 시 무한대로
            눌러지는 버그입니다.
          </IssueContent>
          <TagContainer>
            <PLTag pl="html" />
            <PLTag pl="css" />
            <PLTag pl="js" />
            <PLTag pl="react" />
          </TagContainer>
        </MainContainer>
      </Container>
    );
  }
}
