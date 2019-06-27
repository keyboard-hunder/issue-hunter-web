import React from "react";
import styled from "styled-components";
import { SharedContainer, SharedInnerContainer } from "../sharedStyle";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import Logo from "../static/logo.png";

const Container = styled(SharedContainer)<{ pathname: string }>`
  padding: 1.5rem 1rem;
  background-color: #4e7cff;
  align-items: flex-start;
  position: absolute;
  z-index: 1;
  transition: 0.5s ease-in-out;
  height: ${({ pathname }) =>
    pathname === "/issue-create" ? "7rem" : "12rem"};
`;

const CustomLink = styled(Link)`
  position: relative;
  z-index: 2;
`;

const LogoIcon = styled.img`
  position: relative;
  z-index: 3;
  width: 12rem;
`;

const InnerContainer = styled(SharedInnerContainer)`
  justify-content: space-between;
`;

interface Props extends RouteComponentProps {}
interface State {}

class Header extends React.Component<Props, State> {
  render() {
    console.log(this.props);
    const {
      location: { pathname }
    } = this.props;
    return (
      <Container pathname={pathname}>
        <InnerContainer>
          <CustomLink to={"/"}>
            <LogoIcon src={Logo} />
          </CustomLink>
        </InnerContainer>
      </Container>
    );
  }
}

export default withRouter(Header);
