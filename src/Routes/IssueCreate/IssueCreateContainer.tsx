import React from "react";
import IssueCreatePresenter from "./IssueCreatePresenter";
import { serverDataAPIs } from "../../api";
import { Loading } from "../../Components/Loading";

interface Props {}

interface State {
  loading: boolean;
  repositories: unknown[];
  issues: any;
  price: number;
  targetRepository: string;
  targetIssue: unknown;
  tags: unknown[];
  repositoryPage: number;
  issuePage: number;
}

export default class IssueCreateContainer extends React.Component<
  Props,
  State
> {
  state = {
    loading: true,
    repositories: [],
    issues: null,
    targetRepository: "",
    targetIssue: null,
    price: 0,
    tags: [],
    repositoryPage: 0,
    issuePage: 0
  };

  handleOnClickRepository = async (targetRepository: any) => {
    console.log(targetRepository);
    this.setState({ targetRepository });
    const {
      data: {
        result: { issues }
      }
    } = await serverDataAPIs.getIssues(targetRepository, 0);
    console.log(issues);
    if (issues) {
      this.setState({ issues });
    } else {
      this.setState({ issues: [] });
    }
  };

  handleOnClickMoreRepository = async () => {
    const jwt = localStorage.getItem("jwt");
    const { repositoryPage } = this.state;
    if (jwt) {
      const {
        data: {
          result: { repositories }
        }
      } = await serverDataAPIs.getRepositories(jwt, repositoryPage);
      this.setState({
        repositories: [this.state.repositories, ...repositories],
        loading: false,
        repositoryPage: repositoryPage + 1
      });
    } else {
    }
  };

  handleOnClickIssue = (issue: unknown) => {
    console.log(issue);
  };
  componentDidMount = async () => {
    const jwt = localStorage.getItem("jwt");
    const { repositoryPage } = this.state;
    if (jwt) {
      const {
        data: {
          result: { repositories }
        }
      } = await serverDataAPIs.getRepositories(jwt, repositoryPage);
      this.setState({
        repositories,
        loading: false,
        repositoryPage: repositoryPage + 1
      });
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
