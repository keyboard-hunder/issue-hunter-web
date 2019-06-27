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
  repository: unknown;
  issue: unknown;
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
    repository: null,
    issue: null,
    price: 0,
    tags: []
  };

  handleOnClickRepository = (repository: unknown) => {
    console.log(repository);
    this.setState({ repository });
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
    const { loading, repositories, issues } = this.state;
    return loading ? (
      <Loading />
    ) : (
      <IssueCreatePresenter
        handleOnClickRepository={this.handleOnClickRepository}
        handleOnClickIssue={this.handleOnClickIssue}
        repositories={repositories}
        issues={issues}
      />
    );
  }
}
