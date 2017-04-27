import React, { Component } from "react";
import { inject, observer } from "mobx-react";

//lodash
import map from "lodash/map";

//config
import devices from "config/devices";

//styles
import { ThemeProvider } from "styled-components";

//styled-components
import { Home, Devices } from "./styles";

//components
import Device from "components/Device";
import Toolbar from "components/Toolbar";

@inject("store")
@observer
class HomeComponent extends Component {

  render() {
    const { store: { app }, padding, children } = this.props;
    const { zoom, darkMode, theme, url, isVisible, orientation } = app;

    return (
      <ThemeProvider theme={theme}>
        <Home>
          <Toolbar />
          {url &&
            <Devices darkMode={darkMode}>
              {map(devices, (device, key) => (
                <Device
                  orientation={orientation}
                  visible={isVisible(device)}
                  zoom={zoom}
                  key={key}
                  theme={theme}
                  url={url}
                  padding={padding}
                  device={device}
                >
                  {children}
                </Device>
              ))}
            </Devices>}
        </Home>
      </ThemeProvider>
    );
  }
}

export default HomeComponent;
