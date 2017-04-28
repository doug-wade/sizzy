import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { ThemeProvider } from "styled-components";

@inject("store")
@observer
class AppComponent extends Component {
  //return the currentView (src/views/Home) for now until there are more pages, or Sizzy is used as a plugin for react-storybook
  render() {
    const { store: { router, app } } = this.props;
    return (
      <ThemeProvider theme={app.theme}>
        {router.currentView && router.currentView.component}
      </ThemeProvider>
    );
  }
}

export default AppComponent;
