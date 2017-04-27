import React, { Component } from "react";
import { inject, observer } from "mobx-react";

//styled-components
import {
  Toolbar,
  ToolbarButton,
  Zoom,
  ZoomLabel,
  ZoomLevel,
  ToolbarButtons,
  ToolbarRightSide,
  ToolbarLeft,
  AppName,
  Filters,
  ButtonIcon,
  UrlInput
} from "./styles";
import { OS, DEVICE_TYPES } from "config/tags";

//components
import FilterIcon from "components/FilterIcon";

@inject("store")
@observer
class ToolbarComponent extends Component {
  render() {
    const { store: { app } } = this.props;
    const { filters, zoom } = app;

    return (
      <Toolbar>

        <ToolbarLeft>
          <AppName> Sizzy </AppName>
          <UrlInput onChange={app.setUrl} type="text" placeholder="Enter URL" />
        </ToolbarLeft>

        <Filters>
          <FilterIcon
            toggleFilterfn={app.toggleFilter}
            filters={filters}
            toggle={OS.APPLE}
            icon="apple"
          />
          <FilterIcon
            toggleFilterfn={app.toggleFilter}
            filters={filters}
            toggle={OS.ANDROID}
            icon="android"
          />
          <FilterIcon
            toggleFilterfn={app.toggleFilter}
            filters={filters}
            toggle={DEVICE_TYPES.PHONE}
            icon="mobile"
          />
          <FilterIcon
            toggleFilterfn={app.toggleFilter}
            filters={filters}
            toggle={DEVICE_TYPES.TABLET}
            icon="tablet"
          />
        </Filters>

        <ToolbarRightSide>
          <ToolbarButtons>
            <ToolbarButton> <ButtonIcon name="mobile" /> </ToolbarButton>
            <ToolbarButton onClick={app.switchTheme}>
              <ButtonIcon name="paint-brush" />
            </ToolbarButton>
          </ToolbarButtons>

          <Zoom>
            <ZoomLabel> Zoom </ZoomLabel>
            <ZoomLevel>({zoom}%)</ZoomLevel>
            <input
              type="range"
              min="20"
              max="100"
              onChange={app.setZoom}
              value={zoom}
            />
          </Zoom>
        </ToolbarRightSide>

      </Toolbar>
    );
  }
}

export default ToolbarComponent;
