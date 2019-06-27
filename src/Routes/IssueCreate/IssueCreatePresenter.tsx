import React from "react";
import styled from "styled-components";
import Repository from "../../Components/Repository";

const Container = styled.div`
  width: 100%;
  align-items: center;
  height: 50rem;
`;

const IssueSelector = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 35rem;
  overflow-y: scroll;
`;

const RepositoryContainer = styled.div``;

const IssueContainer = styled.div``;

const RestSelector = styled.div`
  height: 10rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

const ProfileImage = styled.div`
  background-image: url(https://mblogthumb-phinf.pstatic.net/MjAxODA1MjhfMTA0/MDAxNTI3NDg3MTczOTY5.C2eXPMwTXPN7mN6rhXpLrbLAu36fyR7JDr3Ym8URGl8g.97dxz-n9zjbzgv8KbhDwrICDNbNierqWueC0aRsfgjIg.JPEG.ehfkdl8989/KakaoTalk_Moim_4UjmLsR1AohJhEmSqqNZkX7uHKU0kp.jpg?type=w800);
  background-position: center center;
  background-size: 100%;
  border-radius: 100%;
  height: 4rem;
  width: 4rem;
  margin: 1rem;
`;
const Nickname = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
`;

interface Props {
  repositories: any;
  handleOnClickRepository: (repo: unknown) => void;
}

const IssueCreatePresenter: React.SFC<Props> = ({
  repositories,
  handleOnClickRepository
}) => {
  return (
    <Container>
      <IssueSelector>
        <RepositoryContainer>
          {repositories.map((repository: any) => (
            <Repository
              handleOnClickRepository={handleOnClickRepository}
              repository={repository}
            />
          ))}
        </RepositoryContainer>
        <IssueContainer>issues</IssueContainer>
      </IssueSelector>
      <RestSelector>
        <ProfileContainer>
          <ProfileImage />
          <Nickname>보노보노</Nickname>
        </ProfileContainer>
        selector
      </RestSelector>
    </Container>
  );
};

export default IssueCreatePresenter;
