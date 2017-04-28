// @flow
import type { InputEvent } from "config/types";
import { observable, action, computed } from "mobx";
import { toggleInArray } from "utils/array-utils";
import allDevices from "config/devices";

//models
import Settings from "stores/models/settings";
import Device from "stores/models/device";

//config
import themes from "styles/themes";
import devices from "config/devices";
import { OS, DEVICE_TYPES } from "config/tags";

//lodash
import every from "lodash/every";
import filter from "lodash/filter";
import map from "lodash/map";

class AppStore {
  /* Observables */
  @observable themeIndex: number = 1;
  @observable url: string = "https://preactjs.com";
  @observable filters: Array<string> = [
    ...map(DEVICE_TYPES, device => device),
    ...map(OS, os => os)
  ];
  settings: Settings = new Settings(true);

  /* Props */
  @observable devices: Array<Device> = map(
    allDevices,
    device => new Device(device)
  );

  /* Actions */

  //update zoom/orientation values of all devices with the global settings
  @action updateAllDevices = () => {
    this.devices.forEach(device =>
      device.settings.update(this.settings.getValues())
    );
  };

  @action resetAllSettings = () => {
    this.settings.reset();
    this.updateAllDevices();
  };

  @action setUrl = (e: InputEvent) => (this.url = e.target.value);

  @action toggleFilter = (filterName: string) => {
    this.filters = toggleInArray(this.filters, filterName);
  };

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

  isVisible = (device: Device) => {
    return device && device.name
      ? this.filteredDeviceNames.indexOf(device.name) !== -1
      : false;
  };
}

export default AppStore;
