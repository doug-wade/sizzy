// @flow
import type { InputEvent } from "config/types";
import store from "stores/store";

import { observable, action, computed } from "mobx";
import ORIENTATIONS from "config/orientations";
import { getOppositeOrientation } from "utils/utils";

type DeviceSettings = {
  zoom: number,
  orientation: string
};

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
    this.zoom = zoom;
    this.orientation = orientation;
    this.showSizes = showSizes;
  };

  //if global zoom/orientation changed, update all devices
  @action modifyGlobalSettings = () => {
    if (this.global === true) {
      store.app.updateAllDevices();
    }
  };

  @action reset = () => {
    this.zoom = 100;
    this.orientation = ORIENTATIONS.PORTRAIT;
    this.showSizes = true;
  };

  @action setZoom = (e: InputEvent) => {
    this.zoom = e.target.value;
    this.modifyGlobalSettings();
  };

  @action toggleShowSizes = () => {
    this.showSizes = !this.showSizes;
    this.modifyGlobalSettings();
  };

  @action toggleOrientation = () => {
    this.orientation = getOppositeOrientation(this.orientation);
    this.modifyGlobalSettings();
  };

  /* Helpers */

  getValues = (): DeviceSettings => ({
    zoom: this.zoom,
    showSizes: this.showSizes,
    orientation: this.orientation
  });
}

export default Settings;
