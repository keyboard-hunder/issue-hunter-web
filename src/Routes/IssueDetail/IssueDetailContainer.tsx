import React from "react";
import IssueDetailPresenter from "./IssueDetailPresenter";

interface State {}

interface Props {
  match: {
    params: {
      issue_id: string;
    };
  };
  history: {
    push: any;
  };
}

export default class IssueDetailContainer extends React.Component<
  Props,
  State
> {
  render() {
    const {
      match: {
        params: { issue_id }
      }
    } = this.props;
    return <IssueDetailPresenter issue_id={issue_id} tags={["html", "css"]} />;
  }
}
