import React from "react";
import styled from "styled-components";
import IssueItem from "../../Components/IssueItem";
import FloatingBox from "../../Components/FloatingBox";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 3rem 0;
`;

const IssueItemList = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, auto));
  width: 100%;
  margin-right: 1rem;
`;

interface Props {}

const HomePresenter = ({  }: Props) => {
  return (
    <Container>
      <IssueItemList>
        <IssueItem />
        <IssueItem />
        <IssueItem />
        <IssueItem />
        <IssueItem />
        <IssueItem />
        <IssueItem />
        <IssueItem />
        <IssueItem />
        <IssueItem />
        <IssueItem />
        <IssueItem />
      </IssueItemList>
      <FloatingBox />
    </Container>
  );
};

export default HomePresenter;
