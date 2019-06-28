import React from "react";
import styled from "styled-components";
import Repository from "../../Components/Repository";
import Issue from "../../Components/Issue";
import Filter from "../../Components/Filter";
import Coin from "../../static/klaytn design.png";
import { InputNumber } from "antd";

const Container = styled.div`
  width: 100%;
  align-items: center;
  height: 50rem;
`;

const IssueSelector = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 23.3rem;
  margin-bottom: 1rem;
`;

const RepositoryTitle = styled.div`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 700;
`;

const IssueTitle = styled.div`
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
`;

const RepositoryContainer = styled.div`
  overflow-y: scroll;
  overflow-x: visible;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  unicode-bidi: bidi-override;
  direction: rtl;
  padding-left: 0.5rem;
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar {
    width: 0.5rem;
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background-color: #ffc645;
  }
`;

const IssueContainer = styled.div`
  overflow-y: auto;
`;

const RestSelector = styled.div`
  height: 20rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: white;
  border-radius: 0.5rem;
`;

const LeftTopContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const LeftBottomContainer = styled.div``;

const LeftTopItem = styled.div`
  padding: 1rem;
`;

const LeftTopTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #4e7cff;
  margin-bottom: 0.5rem;
`;

const LeftContainer = styled.div``;

const LeftTopSubTitle = styled.div``;

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
  height: 3rem;
  width: 3rem;
  margin: 1rem;
`;
const Nickname = styled.div`
  font-size: 1rem;
  font-weight: 700;
`;

const PlusIcon = styled.i`
  font-size: 1.5rem;
  cursor: pointer;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem 2rem 1rem;
`;

const KlaytnTitle = styled.div`
  align-self: flex-start;
  font-size: 1.2rem;
  font-weight: 700;
  color: #4e7cff;
`;

const CoinImage = styled.img`
  width: 8rem;
`;

const Question = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
`;

const CoinInput = styled(InputNumber)`
  width: 100%;
`;

const InputContainer = styled.div`
  border: 1px solid #4e7cff;
  width: 12rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubmitButton = styled.i`
  font-size: 1.5rem;
  padding: 0.5rem;
  cursor: pointer;
`;

interface Props {
  repositories: unknown[];
  issues: any;
  tags: any;
  targetRepository: string;
  targetIssue: string;
  noMoreRepository: boolean;
  price: number;
  handleOnClickRepository: (repo: string) => void;
  handleOnClickIssue: (issue: string) => void;
  handleOnClickMoreRepository: () => Promise<void>;
  toggleTag: (idx: number) => void;
  handleOnChange: (value: any) => void;
  handleOnSubmit: (
    repositoryFullName: string,
    klaytnPrice: number,
    tags: number[],
    issueNumber: number
  ) => Promise<void>;
}

const IssueCreatePresenter: React.SFC<Props> = ({
  repositories,
  issues,
  targetRepository,
  targetIssue,
  tags,
  toggleTag,
  price,
  handleOnSubmit,
  noMoreRepository,
  handleOnClickRepository,
  handleOnClickIssue,
  handleOnClickMoreRepository,
  handleOnChange
}) => {
  return (
    <Container>
      <IssueSelector>
        <RepositoryTitle>Your Repository</RepositoryTitle>
        <IssueTitle>Issue</IssueTitle>
        <RepositoryContainer>
          {repositories.map((repository: any, idx: number) => (
            <Repository
              isActive={repository.fullName === targetRepository}
              handleOnClickRepository={handleOnClickRepository}
              repository={repository}
              key={idx}
            />
          ))}
          {!noMoreRepository && (
            <PlusIcon
              onClick={() => handleOnClickMoreRepository()}
              className="fas fa-plus-square"
            />
          )}
        </RepositoryContainer>
        <IssueContainer>
          {issues &&
            issues.map((issue: any, idx: number) => (
              <Issue
                isActive={issue.num.toString() === targetIssue}
                handleOnClickIssue={handleOnClickIssue}
                issue={issue}
                key={idx}
              />
            ))}
        </IssueContainer>
      </IssueSelector>
      <RestSelector>
        <LeftContainer>
          <LeftTopContainer>
            <ProfileContainer>
              <ProfileImage />
              <Nickname>보노보노</Nickname>
            </ProfileContainer>
            <LeftTopItem>
              <LeftTopTitle>Repository</LeftTopTitle>
              <LeftTopSubTitle>{targetRepository}</LeftTopSubTitle>
            </LeftTopItem>
            <LeftTopItem>
              <LeftTopTitle>Issue</LeftTopTitle>
              <LeftTopSubTitle>{targetIssue}</LeftTopSubTitle>
            </LeftTopItem>
          </LeftTopContainer>
          <LeftBottomContainer>
            <Filter tags={tags} toggleTag={toggleTag} />
          </LeftBottomContainer>
        </LeftContainer>
        <RightContainer>
          <KlaytnTitle>Klaytn</KlaytnTitle>
          <CoinImage src={Coin} />
          <Question>얼마나 줄꺼에요?</Question>
          <InputContainer>
            <CoinInput
              defaultValue={0}
              formatter={price =>
                `₭ ${price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={price => price!.toString().replace(/\$\s?|(,*)/g, "")}
              onChange={handleOnChange}
            />
            <SubmitButton
              onClick={() =>
                handleOnSubmit(
                  targetRepository,
                  price,
                  tags,
                  parseInt(targetIssue)
                )
              }
              className="fas fa-arrow-right"
            />
          </InputContainer>
        </RightContainer>
      </RestSelector>
    </Container>
  );
};

export default IssueCreatePresenter;
