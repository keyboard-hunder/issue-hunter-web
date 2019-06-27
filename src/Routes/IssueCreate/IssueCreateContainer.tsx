import React from "react";
import IssueCreatePresenter from "./IssueCreatePresenter";
import { serverDataAPIs } from "../../api";
import { Loading } from "../../Components/Loading";

interface Props {}

interface State {
  loading: boolean;
  repositories: unknown[];
  issues: unknown[];
  price: number;
  targetRepository: unknown;
  targetIssue: unknown;
  tags: unknown[];
}

export default class IssueCreateContainer extends React.Component<
  Props,
  State
> {
  state = {
    loading: true,
    repositories: [],
    issues: [],
    targetRepository: null,
    targetIssue: null,
    price: 0,
    tags: []
  };

  handleOnClickRepository = (targetRepository: unknown) => {
    console.log(targetRepository);
    this.setState({ targetRepository });
  };

  handleOnClickIssue = (issue: unknown) => {
    console.log(issue);
  };
  componentDidMount = async () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      const {
        data: {
          result: { repositories }
        }
      } = await serverDataAPIs.getRepositories(jwt);
      this.setState({ repositories, loading: false });
      //   const issues = await serverDataAPIs.getIssues("dl0312/")
    } else {
    }
  };
  render() {
    const {
      loading,
      repositories,
      issues,
      targetRepository,
      targetIssue
    } = this.state;
    return loading ? (
      <Loading />
    ) : (
      <IssueCreatePresenter
        handleOnClickRepository={this.handleOnClickRepository}
        handleOnClickIssue={this.handleOnClickIssue}
        repositories={repositories}
        issues={issues}
        targetRepository={targetRepository}
        targetIssue={targetIssue}
      />
    );
  }
}
