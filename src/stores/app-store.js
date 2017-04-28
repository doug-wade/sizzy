// @flow
import type { InputEvent } from "config/types";

import { observable, action, computed } from "mobx";
import { toggleInArray } from "utils/array-utils";
import ORIENTATIONS from "config/orientations";

//config
import themes from "styles/themes";
import devices from "config/devices";
import { OS, DEVICE_TYPES } from "config/tags";

//lodash
import every from "lodash/every";
import filter from "lodash/filter";
import map from "lodash/map";

class AppStore {
  @observable zoom: number = 100;
  @observable themeIndex: number = 1;
  @observable url: string = "https://preactjs.com";
  @observable orientation: string = ORIENTATIONS.PORTRAIT;

  @observable filters: Array<string> = [
    ...map(DEVICE_TYPES, device => device),
    ...map(OS, os => os)
  ];

  /* Action */

  @action setUrl = (e: InputEvent) => (this.url = e.target.value);

  @action toggleFilter = (filterName: string) => {
    this.filters = toggleInArray(this.filters, filterName);
  };

  @action toggleOrientation = () => {
    let newOrientation = this.orientation === ORIENTATIONS.PORTRAIT
      ? ORIENTATIONS.LANDSCAPE
      : ORIENTATIONS.PORTRAIT;
    this.orientation = newOrientation;
  };

  @action setZoom = (e: InputEvent) => (this.zoom = e.target.value);

  //cycle through themes
  @action switchTheme = () => {
    const themeKeys = Object.keys(themes);
    let newThemeIndex = this.themeIndex + 1;
    this.themeIndex = newThemeIndex >= themeKeys.length ? 0 : newThemeIndex;
  };

  /* Computed */

  @computed get filteredDeviceNames(): Array<string> {
    let filteredDevices = filter(devices, device =>
      every(device.tags, tag => this.filters.indexOf(tag) !== -1)
    );
    return map(filteredDevices, device => device.name);
  }

  @computed get theme(): Object {
    return themes[Object.keys(themes)[this.themeIndex]];
  }

  /* Helpers */

  isVisible = (device: Object) => {
    return this.filteredDeviceNames.indexOf(device.name) !== -1;
  };
}

export default AppStore;
