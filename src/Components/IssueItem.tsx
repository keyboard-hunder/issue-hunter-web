import React from "react";
import styled from "styled-components";
import PLTag from "./PLTag";
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

const TimeText = styled.div`
  font-weight: 700;
`;

const TagContainer = styled.div`
  line-height: 2;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
  max-width: 5rem;
`;

const ProfileImage = styled.div<{ url: string }>`
  background-image: url(${({ url }) => url});
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
    var date = new Date(issue.timestamp * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime =
      hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    // console.log(`${issue.repoURL}/issues/${issue.issueNumber}`);
    return (
      <a target="_blank" href={`${issue.repoURL}/issues/${issue.issueNumber}`}>
        <Container>
          <ProfileContainer>
            <ProfileImage url={issue.imageURL} />
            <Nickname>{issue.repoURL.split("/")[3]}</Nickname>
          </ProfileContainer>
          <MainContainer>
            <RepoText>{issue.repoURL.split("/")[4]}</RepoText>
            <IssueText>{issue.title}</IssueText>
            <ThirdContainer>
              <TagContainer>
                {issue.tags.split("/").map((tag: string, idx: number) => (
                  <PLTag pl={tag} key={idx} />
                ))}
              </TagContainer>
              <TimeText>{formattedTime}</TimeText>
            </ThirdContainer>
          </MainContainer>
          <NumericContainer>
            <NumericItem>
              <NumericNum>₭ {issue.price}</NumericNum>
              <KlaytnIcon src={Klaytn} />
            </NumericItem>
          </NumericContainer>
        </Container>
      </a>
    );
  }
}
