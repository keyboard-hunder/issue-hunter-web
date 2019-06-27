import React from "react";
import styled from "styled-components";
import PLTag from "./PLTag";

const tags = ["html", "css", "js", "react"];

const Title = styled.div`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Container = styled.div`
  background-color: white;
  padding: 1rem;
`;

const TagContainer = styled.div`
  line-height: 2;
`;

interface Props {}

interface State {}

export default class Filter extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        <Title>태그</Title>
        <TagContainer>
          {tags.map(tag => (
            <PLTag pl={tag} />
          ))}
        </TagContainer>
      </Container>
    );
  }
}
