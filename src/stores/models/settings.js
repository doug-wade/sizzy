// @flow
import type { InputEvent, DeviceSettings } from "config/types";

import store from "stores/store";

import { observable, action, computed } from "mobx";
import ORIENTATIONS from "config/orientations";
import { getOppositeOrientation } from "utils/utils";

class Settings {
  constructor(global: ?boolean) {
    if (global) {
      this.global = global;
    }
  }

  global: boolean = false;

  /* Observables */

  @observable zoom: number = 100;
  @observable showSizes: boolean = true;
  @observable orientation: string = ORIENTATIONS.PORTRAIT;

  /* Actions */

  @action update = ({ zoom, orientation, showSizes }: DeviceSettings) => {
    if (zoom !== undefined) {
      this.zoom = zoom;
    }
    if (orientation !== undefined) {
      this.orientation = orientation;
    }
    if (showSizes !== undefined) {
      this.showSizes = showSizes;
    }
  };

  //if global zoom/orientation changed, update all devices
  @action modifyGlobalSettings = (settings: DeviceSettings) => {
    if (this.global === true) {
      store.app.updateAllDevices(settings);
    }
  };

  @action reset = () => {
    this.zoom = 100;
    this.orientation = ORIENTATIONS.PORTRAIT;
    this.showSizes = true;
  };

  @action setZoom = (e: InputEvent) => {
    const zoom = e.target.value;
    this.zoom = zoom;
    this.modifyGlobalSettings({ zoom });
  };

  @action toggleShowSizes = () => {
    const showSizes = !this.showSizes;
    this.showSizes = showSizes;
    this.modifyGlobalSettings({ showSizes });
  };

  @action toggleOrientation = () => {
    const orientation = getOppositeOrientation(this.orientation);
    this.orientation = orientation;
    this.modifyGlobalSettings({ orientation });
  };

  /* Helpers */

  getValues = (): DeviceSettings => ({
    zoom: this.zoom,
    showSizes: this.showSizes,
    orientation: this.orientation
  });
}

export default Settings;
