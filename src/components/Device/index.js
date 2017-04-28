// @flow
import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import { deviceHeader } from "styles/sizes";
import ORIENTATIONS from "config/orientations";

//external
import Framed from "react-frame-component";

//styled-components
import { Name, Header, Rotate, Device } from "./styles";

type Props = {
  device: {
    width: number,
    name: string,
    height: number
  },
  orientation: string,
  zoom: number,
  children?: React.Element<*>,
  theme: Object,
  visible: boolean,
  url: string
};

@observer class DeviceComponent extends Component {
  props: Props;

  render() {
    const {
      device: { width, name, height },
      orientation,
      zoom,
      children,
      theme,
      visible,
      url
    } = this.props;

    //invert values in landscape
    const landscape = orientation === ORIENTATIONS.LANDSCAPE;
    const iframeHeight = landscape ? width : height;
    const iframeWidth = landscape ? height : width;

    const zoomValue = zoom * 0.01;
    const deviceHeaderTotalHeight =
      deviceHeader.height + deviceHeader.marginBottom;

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
      height: iframeHeight * zoomValue + deviceHeaderTotalHeight,
      position: "relative",
      display: visible ? "flex" : "none" //hide/show iframe instead of completely destroying it, much faster.
    };

    const hasChildren = !url && children;

    return (
      <Device style={deviceStyle}>
        <Header>
          <Name> {name} </Name>
          <Rotate name="repeat" />
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
