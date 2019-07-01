import React from "react";
import HomePresenter from "./HomePresenter";
import { loadIssue } from "../../block";
import { Loading } from "../../Components/Loading";
import { serverDataAPIs } from "../../api";
import { PLTags } from "../../config/_mixin";

interface Props {}

interface State {
  tags: number[];
  searchTerm: string;
  issues: any;
}

export default class HomeContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      tags: [],
      searchTerm: "",
      issues: null
    };
  }

  toggleTag = (idx: number) => {
    const { tags } = this.state;
    const index = tags.indexOf(idx);
    if (index !== -1) {
      tags.splice(index, 1);
      this.setState({ tags });
    } else {
      tags.push(idx);
      this.setState({ tags });
    }
  };

  handleSetTags = (item: any) => {
    console.log(item);
  };

  componentDidMount = async () => {
    let issues: any = [];
    const range = 100;
    const jwt = localStorage.getItem("jwt");
    for (let i = 0; i < range; i++) {
      loadIssue(i, (result: any) => {
        if (result) {
          issues.push(result);
          issues.sort((a: any, b: any) => b.timestamp - a.timestamp);
          this.setState({ issues });
        }
      });
    }
    if (jwt) {
      const profile = await serverDataAPIs.getProfile(jwt);
      console.log(profile);
    }
  };

  render() {
    let { issues, tags } = this.state;
    if (tags.length !== 0) {
      const category: string[] = [];
      tags.forEach((tag: number) => category.push(PLTags[tag]));
      if (issues) {
        issues = issues.filter((issue: any) => category.includes(issue.tags));
        console.log(issues);
      }
    }
    return !issues ? (
      <Loading />
    ) : (
      <HomePresenter
        issues={issues}
        tags={this.state.tags}
        toggleTag={this.toggleTag}
      />
    );
  }
}
