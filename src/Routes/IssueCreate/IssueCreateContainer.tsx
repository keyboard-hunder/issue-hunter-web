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
  targetIssue: string;
  tags: unknown[];
  repositoryPage: number;
  issuePage: number;
  noMoreRepository: boolean;
  noMoreIssue: boolean;
}

export default class IssueCreateContainer extends React.Component<
  Props,
  State
> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: true,
      repositories: [],
      issues: null,
      targetRepository: "",
      targetIssue: "",
      price: 0,
      tags: [],
      repositoryPage: 1,
      issuePage: 1,
      noMoreRepository: false,
      noMoreIssue: false
    };
  }

  handleOnClickIssue = (targetIssue: string) => {
    this.setState({ targetIssue });
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
    console.log(this.state);
    const jwt = localStorage.getItem("jwt");
    const { repositoryPage } = this.state;
    if (jwt) {
      const {
        data: {
          result: { repositories }
        }
      } = await serverDataAPIs.getRepositories(jwt, repositoryPage);

      if (repositories.length !== 30) {
        this.setState({ noMoreRepository: true });
      }
      this.setState({
        repositories: this.state.repositories.concat(repositories),
        loading: false,
        repositoryPage: repositoryPage + 1
      });
    } else {
    }
  };

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
      tags,
      targetRepository,
      targetIssue,
      noMoreRepository
    } = this.state;
    return loading ? (
      <Loading />
    ) : (
      <IssueCreatePresenter
        handleOnClickMoreRepository={this.handleOnClickMoreRepository}
        handleOnClickRepository={this.handleOnClickRepository}
        handleOnClickIssue={this.handleOnClickIssue}
        repositories={repositories}
        issues={issues}
        tags={tags}
        targetRepository={targetRepository}
        targetIssue={targetIssue}
        noMoreRepository={noMoreRepository}
        toggleTag={this.toggleTag}
      />
    );
  }
}
