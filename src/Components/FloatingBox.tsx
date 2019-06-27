import React from "react";
import styled from "styled-components";
import Filter from "./Filter";
import GitHubLogin from "./GitHubLogin";
import Search from "./Search";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: sticky;
  top: 1rem;
  max-height: 20rem;
  display: flex;
  flex-direction: column;
`;
const ProfileContainer = styled.div`
  background-color: white;
  max-height: 10rem;
  padding: 1rem;
  margin-bottom: 0.5rem;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const ProfileImg = styled.div`
  background-image: url(https://mblogthumb-phinf.pstatic.net/MjAxODA1MjhfMTA0/MDAxNTI3NDg3MTczOTY5.C2eXPMwTXPN7mN6rhXpLrbLAu36fyR7JDr3Ym8URGl8g.97dxz-n9zjbzgv8KbhDwrICDNbNierqWueC0aRsfgjIg.JPEG.ehfkdl8989/KakaoTalk_Moim_4UjmLsR1AohJhEmSqqNZkX7uHKU0kp.jpg?type=w800);
  background-position: center center;
  background-size: 100%;
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
  margin-right: 0.5rem;
`;

const Nickname = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: #121212;
  width: 100%;
  color: white;
  font-weight: 700;
  padding: 0.5rem;
  margin-top: 0.5rem;
`;

const Disqus = styled.div`
  padding: 0 0.2rem;
`;

interface Props {
  toggleTag: (idx: number) => void;
  tags: number[];
}

interface State {}

export default class FloatingBox extends React.Component<Props, State> {
  render() {
    const isLogin = Boolean(localStorage.getItem("jwt"));
    return (
      <Container>
        {isLogin ? (
          <ProfileContainer>
            <UserProfile>
              <ProfileImg />
              <Nickname>보노보노</Nickname>
            </UserProfile>

            <ButtonContainer>
              <Button>내 글보기</Button>
              <Link style={{ width: "100%" }} to={"/issue-create"}>
                <Button>글 작성하기</Button>
              </Link>
            </ButtonContainer>
          </ProfileContainer>
        ) : (
          <GitHubLogin />
        )}
        <Search />
        <Filter tags={this.props.tags} toggleTag={this.props.toggleTag} />
        <Disqus id="disqus_thread" />
      </Container>
    );
  }
}
