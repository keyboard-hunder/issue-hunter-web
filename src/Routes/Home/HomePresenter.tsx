import React from "react";
import styled from "styled-components";
import IssueItem from "../../Components/IssueItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0;
`;

const IssueItemList = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, auto));
  width: 100%;
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
      </IssueItemList>
    </Container>
  );
};

export default HomePresenter;
