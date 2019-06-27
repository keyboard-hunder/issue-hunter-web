import React from "react";
import IssueCreatePresenter from "./IssueCreatePresenter";
import { serverDataAPIs } from "../../api";
import { Loading } from "../../Components/Loading";

interface Props {}

interface State {
  loading: boolean;
  repositories: unknown;
}

export default class IssueCreateContainer extends React.Component<
  Props,
  State
> {
  state = {
    loading: true,
    repositories: []
  };

  handleOnClickRepository = (repo: unknown) => {
    console.log(repo);
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
    const { loading, repositories } = this.state;
    return loading ? (
      <Loading />
    ) : (
      <IssueCreatePresenter
        handleOnClickRepository={this.handleOnClickRepository}
        repositories={repositories}
      />
    );
  }
}
