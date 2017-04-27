import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import { deviceHeader } from "styles/sizes";

//external
import Framed from "react-frame-component";

//styled-components
import { Name, Header, Rotate, Device } from "./styles";

@observer class DeviceComponent extends Component {
  @observable landscape = this.props.landscape || false;
  @action toggleLandscape = () => (this.landscape = !this.landscape);

  render() {
    const { landscape } = this;
    const {
      device: { width, name, height },
      zoom,
      children,
      theme,
      visible,
      url
    } = this.props;

    //invert values in landscape
    const iframeHeight = landscape ? width : height;
    const iframeWidth = landscape ? height : width;

    const zoomValue = zoom * 0.01;
    const deviceHeaderTotalHeight = deviceHeader.height + deviceHeader.marginBottom;

    //highly dynamic styles must be inline
    const frameProps = {
      style: {
        transform: `scale(${zoomValue})`,
        transformOrigin: "top left",
        position: "absolute",
        top: deviceHeaderTotalHeight,
        border: "none",
        left: 0,
        borderRadius: 3,
        ...theme.iframeStyle
      },
      width: `${iframeWidth}px`,
      height: `${iframeHeight}px`
    };

    const deviceStyle = {
      width: iframeWidth * zoomValue,
      height: (iframeHeight * zoomValue) + deviceHeaderTotalHeight,
      position: "relative",
      display: visible ? "flex" : "none"
    };

    const hasChildren = !url && children;

    return (
      <Device style={deviceStyle}>
        <Header>
          <Name> {name} </Name>
          <Rotate onClick={this.toggleLandscape} name="repeat" />
        </Header>

        {url && <iframe src={url} {...frameProps} />}

        {/* Allows Sizzy to be used as a component/plugin in react-storybook, etc */}
        {hasChildren &&
          <Framed {...frameProps}>
            {children}
          </Framed>}
      </Device>
    );
  }
}

export default DeviceComponent;
