import React from "react";
import styled from "styled-components";
import IssueItem from "../../Components/IssueItem";
import FloatingBox from "../../Components/FloatingBox";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

const IssueItemList = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, auto));
  width: 100%;
  margin-right: 1rem;
`;

interface Props {
  tags: number[];
  issues: any;
  toggleTag: (idx: number) => void;
}

const HomePresenter: React.SFC<Props> = ({ tags, toggleTag, issues }) => {
  return (
    <Container>
      <IssueItemList>
        {issues &&
          issues.map((issue: any, idx: number) => (
            <IssueItem issue={issue} key={idx} />
          ))}
      </IssueItemList>
      <FloatingBox tags={tags} toggleTag={toggleTag} />
    </Container>
  );
};

export default HomePresenter;
