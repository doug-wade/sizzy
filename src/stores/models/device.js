// @flow
import { observable, action, computed } from "mobx";
import Settings from "stores/models/settings";

class Device {

  name: ?string;
  tags: ?Array<string>;
  width: ?number;
  height: ?number;
  iconName: ?string;

  settings: Settings = new Settings();

  constructor(device: Object){
    this.name = device.name;
    this.tags = device.tags;
    this.width = device.width;
    this.height = device.height;
    this.iconName = device.iconName;
  }

}

export default Device;
