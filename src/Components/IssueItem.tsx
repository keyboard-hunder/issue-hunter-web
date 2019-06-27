import React from "react";
import styled from "styled-components";
import PLTag from "./PLTag";
import { Link } from "react-router-dom";
import Klaytn from "../static/klaytn.svg";

const NumericContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: grey;
  background-color: #0036d1;
  transition: 0.5s ease-in-out;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`;

const Container = styled.div`
  display: flex;
  background-color: white;
  border-radius: 0.5rem;
  padding-left: 1rem;
  min-height: 8rem;
  &:hover {
    ${NumericContainer} {
      background-color: darkblue;
    }
  }
`;

const RepoText = styled.div`
  font-weight: 700;
`;

const IssueText = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0.4rem 0 1rem 0;
  cursor: pointer;
`;

const TimeText = styled.div``;

const TagContainer = styled.div`
  line-height: 2;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem 0;
  padding-right: 1rem;
`;

const NumericItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 6.5rem;
  font-weight: 700;
`;

const KlaytnIcon = styled.img`
  width: 2.5rem;
`;

const NumericNum = styled.i`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #ffc645;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`;

const ProfileImage = styled.div`
  background-image: url(https://mblogthumb-phinf.pstatic.net/MjAxODA1MjhfMTA0/MDAxNTI3NDg3MTczOTY5.C2eXPMwTXPN7mN6rhXpLrbLAu36fyR7JDr3Ym8URGl8g.97dxz-n9zjbzgv8KbhDwrICDNbNierqWueC0aRsfgjIg.JPEG.ehfkdl8989/KakaoTalk_Moim_4UjmLsR1AohJhEmSqqNZkX7uHKU0kp.jpg?type=w800);
  background-position: center center;
  background-size: 100%;
  border-radius: 100%;
  height: 3rem;
  width: 3rem;
  margin: 0.5rem;
`;
const Nickname = styled.div`
  font-size: 0.8rem;
  font-weight: 700;
`;

const ThirdContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface Props {
  issue?: any;
}

interface State {}

export default class IssueItem extends React.Component<Props, State> {
  render() {
    const { issue } = this.props;
    console.log(issue);
    return issue ? (
      <Container>
        <ProfileContainer>
          <ProfileImage />
          <Nickname>보노보노</Nickname>
        </ProfileContainer>
        <MainContainer>
          <RepoText>Keyboard-hunter</RepoText>
          <IssueText>
            <Link to="/issue-detail/1">{issue.title}</Link>
          </IssueText>
          <ThirdContainer>
            <TagContainer>
              {issue.tags.split("/").map((tag: string) => (
                <PLTag pl={tag} />
              ))}
              <PLTag pl="html" />
              <PLTag pl="css" />
              <PLTag pl="js" />
              <PLTag pl="react" />
            </TagContainer>
            <TimeText>30분 전</TimeText>
          </ThirdContainer>
        </MainContainer>

        <NumericContainer>
          <NumericItem>
            <NumericNum>₭ 0.002</NumericNum>
            <KlaytnIcon src={Klaytn} />
          </NumericItem>
        </NumericContainer>
      </Container>
    ) : (
      <Container>
        <ProfileContainer>
          <ProfileImage />
          <Nickname>보노보노</Nickname>
        </ProfileContainer>
        <MainContainer>
          <RepoText>Keyboard-hunter</RepoText>
          <IssueText>
            <Link to="/issue-detail/1">[KH] 키보드 버그</Link>
          </IssueText>
          <ThirdContainer>
            <TagContainer>
              <PLTag pl="html" />
              <PLTag pl="css" />
              <PLTag pl="js" />
              <PLTag pl="react" />
            </TagContainer>
            <TimeText>30분 전</TimeText>
          </ThirdContainer>
        </MainContainer>

        <NumericContainer>
          <NumericItem>
            <NumericNum>₭ 0.002</NumericNum>
            <KlaytnIcon src={Klaytn} />
          </NumericItem>
        </NumericContainer>
      </Container>
    );
  }
}
