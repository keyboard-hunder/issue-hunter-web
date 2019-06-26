import React from "react";

interface Props {
  issue_id: string;
}

const IssueDetailPresenter: React.SFC<Props> = ({ issue_id }) => {
  return <div>{issue_id}</div>;
};

export default IssueDetailPresenter;
