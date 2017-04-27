import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class AppComponent extends Component {
  //return the currentView (src/views/Home) for now until there are more pages, or Sizzy is used as a plugin for react-storybook
  render() {
    const { store: { router } } = this.props;
    return router.currentView && router.currentView.component;
  }
}

export default AppComponent;
