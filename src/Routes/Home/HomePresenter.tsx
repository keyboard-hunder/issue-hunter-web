import React from "react";
import styled from "styled-components";
import IssueItem from "../../Components/IssueItem";

const IssueItemList = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(10rem, auto));
`;

interface Props {}

const HomePresenter = ({  }: Props) => {
  return (
    <IssueItemList>
      <IssueItem />
      <IssueItem />
      <IssueItem />
      <IssueItem />
      <IssueItem />
    </IssueItemList>
  );
};

export default HomePresenter;
