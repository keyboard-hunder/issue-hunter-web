import React from "react";
import styled from "styled-components";
import PLTag from "../../Components/PLTag";

const Container = styled.div`
  background-color: white;
  width: 100%;
`;

const IssueTitle = styled.div``;

const RepoTitle = styled.div``;

const IssueNumber = styled.div``;

const Date = styled.div``;

const TagContainer = styled.div``;
interface Props {
  issue_id: string;
  tags: string[];
}

const IssueDetailPresenter: React.SFC<Props> = ({ issue_id, tags }) => {
  return (
    <Container>
      <IssueTitle>이슈 타이틀</IssueTitle>
      <RepoTitle>리포지터리 타이틀</RepoTitle>
      <IssueNumber>이슈 번호</IssueNumber>
      <Date>날짜</Date>
      <TagContainer>
        {tags.map(tag => (
          <PLTag pl={tag} />
        ))}
      </TagContainer>
      {issue_id}
    </Container>
  );
};

export default IssueDetailPresenter;
