import React from "react";
import HomePresenter from "./HomePresenter";
import { loadOpenedIssues } from "../../block";

interface Props {}

interface State {
  tags: number[];
  searchTerm: string;
}

export default class HomeContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      tags: [],
      searchTerm: ""
    };
  }

  toggleTag = (idx: number) => {
    const { tags } = this.state;
    const index = tags.indexOf(idx);
    if (index != -1) {
      tags.splice(index, 1);
      this.setState({ tags });
    } else {
      tags.push(idx);
      this.setState({ tags });
    }
  };

  render() {
    console.log(this.state);
    loadOpenedIssues();
    return <HomePresenter tags={this.state.tags} toggleTag={this.toggleTag} />;
  }
}
