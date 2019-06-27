import React from "react";
import HomePresenter from "./HomePresenter";
import { loadOpenedIssues } from "../../block";

interface Props {}

interface State {}

export default class HomeContainer extends React.Component<Props, State> {
  state = {};
  render() {
    loadOpenedIssues();
    return <HomePresenter />;
  }
}
