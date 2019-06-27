import React from "react";
import { Tag as AtdTag } from "antd";
import styled from "styled-components";

const LanguageImg = styled.img`
  height: 1rem;
  margin-right: 0.2rem;
`;

const Tag = styled(AtdTag)`
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

interface Props {
  pl: string;
  disable?: boolean;
}

interface State {}

export default class PLTag extends React.Component<Props, State> {
  renderTag = (pl: string, disable: boolean = false) => {
    switch (pl) {
      case "html":
        return (
          <Tag color={disable ? "grey" : "#f16524"}>
            <LanguageImg src="https://img.icons8.com/material/48/000000/html-5.png" />{" "}
            HTML
          </Tag>
        );
      case "css":
        return (
          <Tag color={disable ? "grey" : "#1da1f2"}>
            <LanguageImg src="https://www.shareicon.net/download/2016/08/01/639964_internet.svg" />
            CSS
          </Tag>
        );
      case "js":
        return (
          <Tag color={disable ? "grey" : "#fb9e21"}>
            <LanguageImg src="https://img.icons8.com/ios/50/000000/javascript-logo-filled.png" />
            JavaScript
          </Tag>
        );
      case "react":
        return (
          <Tag color={disable ? "grey" : "#61dbfb"}>
            <LanguageImg src="https://img.icons8.com/ios//50/000000/react-native-filled.png" />
            React
          </Tag>
        );
      case "python":
        return (
          <Tag color={disable ? "grey" : "#0A51B6"}>
            <LanguageImg src="https://img.icons8.com/material/45/000000/python.png" />
            Python
          </Tag>
        );
        case "java":
          return (
            <Tag color={disable ? "grey" : "#DF0101"}>
              <LanguageImg src="https://img.icons8.com/ios/45/000000/java-coffee-cup-logo-filled.png" />
              Java
            </Tag>
          );
        case "swift":
          return (
            <Tag color={disable ? "grey" : "#FA9A00"}>
              <LanguageImg src="https://img.icons8.com/ios/45/000000/swift-filled.png" />
              Swift
            </Tag>
          );
        case "php":
          return (
            <Tag color={disable ? "grey" : "#5C4E8D"}>
              <LanguageImg src="https://img.icons8.com/material-outlined/45/000000/php.png" />
              PHP
            </Tag>
          );
        case "go":
          return (
            <Tag color={disable ? "grey" : "#0E9F9A"}>
              <LanguageImg src="https://img.icons8.com/ios/45/000000/go.png" />
              PHP
            </Tag>
          );
        case "c++":
          return (
            <Tag color={disable ? "grey" : "#ED11CC"}>
              <LanguageImg src="https://img.icons8.com/material-outlined/45/000000/c-plus-plus.png" />
              C++
            </Tag>
          );
        case "ruby":
          return (
            <Tag color={disable ? "grey" : "#EF1505"}>
              <LanguageImg src="https://img.icons8.com/metro/45/000000/ruby-gemstone.png" />
              Ruby
            </Tag>
          );
      default:
        return null;
    }
  };

  render() {
    const { pl, disable } = this.props;
    return this.renderTag(pl, disable);
  }
}
