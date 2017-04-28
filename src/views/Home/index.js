// @flow
import typeof store from "stores/store";
import React, { Component } from "react";
import { inject, observer } from "mobx-react";

//styled-components
import { Home, Devices } from "./styles";

//components
import Device from "components/Device";
import Toolbar from "components/Toolbar";

type Props = {
  store: any | store,
  children?: React.Element<*>
};

@inject("store")
@observer
class HomeComponent extends Component {
  props: Props;

  static defaultProps = {
    store: null
  };

  render() {
    const { store: { app }, children } = this.props;
    const { theme, url, isVisible, settings, devices } = app;
    const { zoom, orientation } = settings;

    return (
      <Home>
        <Toolbar />
        {url &&
          <Devices>
            {devices.map((device, key) => (
              <Device
                key={key}
                orientation={orientation}
                visible={isVisible(device)}
                zoom={zoom}
                theme={theme}
                url={url}
                device={device}
              >
                {children}
              </Device>
            ))}
          </Devices>}
      </Home>
    );
  }
}

export default HomeComponent;
