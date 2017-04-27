import { observable, action, computed } from "mobx";
import { toggleInArray } from "utils/array-utils";

//config
import themes from "styles/themes";
import devices  from "config/devices";
import {OS, DEVICE_TYPES}  from "config/tags";

//lodash
import every from "lodash/every";
import filter from "lodash/filter";
import map from "lodash/map";

class AppStore {
  @observable zoom = 100;
  @observable themeIndex = 1;
  @observable url;

  @observable filters = [
    ...map(DEVICE_TYPES, device => device),
    ...map(OS, os => os)
  ];

  /* Action */

  @action setUrl = e => (this.url = e.target.value);

  @action toggleFilter = filterName => {
    this.filters = toggleInArray(this.filters, filterName);
  };

  @action setZoom = e => (this.zoom = e.target.value);

  //cycle through themes
  @action switchTheme = () => {
    const themeKeys = Object.keys(themes);
    let newThemeIndex = this.themeIndex + 1;
    this.themeIndex = newThemeIndex >= themeKeys.length ? 0 : newThemeIndex;
  };

  /* Computed */

  @computed get filteredDevices() {
    let filteredDevices = filter(devices, device =>
      every(device.tags, tag => this.filters.indexOf(tag) !== -1)
    );
    return map(filteredDevices, device => device.name);
  }

  @computed get theme() {
    return themes[Object.keys(themes)[this.themeIndex]];
  }

  /* Helpers */

  isVisible = device => this.filteredDevices.indexOf(device.name) !== -1;
}

export default AppStore;
