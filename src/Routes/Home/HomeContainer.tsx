import React from "react";
import HomePresenter from "./HomePresenter";
import { loadIssue } from "../../block";
import { Loading } from "../../Components/Loading";

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
    const range = 10;
    for (let i = 0; i < range; i++) {
      loadIssue(i, (result: any) => {
        if (result) {
          issues.push(result);
          this.setState({ issues });
        }
      });
    }
  };

  // componentDidUpdate = async (prevProp: Props, prevState: State) => {
  //   console.log(this.state);
  //   if (this.state.issues.length !== 0) {
  //     let issues: any = [];
  //     const range = 10;
  //     for (let i = 0; i < range; i++) {
  //       loadIssue(i, (result: any) => {
  //         if (result) issues.push(result);
  //       });
  //     }
  //     console.log(issues);
  //     this.setState({ issues });
  //   }
  // };

  render() {
    const { issues } = this.state;
    console.log(this.state);
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
