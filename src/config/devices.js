import {DEVICE_TYPES, OS} from 'config/tags';

const devices = {
  iPhone4: {
    name: "iPhone 4",
    tags: [DEVICE_TYPES.PHONE, OS.APPLE],
    width: 320,
    height: 480,
    iconName: ''
  },
  iPhone5: {
    name: "iPhone 5",
    tags: [DEVICE_TYPES.PHONE, OS.APPLE],
    width: 320,
    height: 568
  },
  iPhone6: {
    name: "iPhone 6",
    tags: [DEVICE_TYPES.PHONE, OS.APPLE],
    width: 375,
    height: 667
  },
  iPhone7plus: {
    name: "iPhone 7 Plus",
    tags: [DEVICE_TYPES.PHONE, OS.APPLE],
    width: 414,
    height: 736
  },
  iPadAir: {
    name: "iPad Air",
    tags: [DEVICE_TYPES.TABLET, OS.APPLE],
    width: 768,
    height: 1024
  },
  nexus6p: {
    name: "Nexus 6P",
    tags: [DEVICE_TYPES.PHONE, OS.ANDROID],
    width: 411,
    height: 731
  },
  galaxys4: {
    name: "Galaxy S4",
    tags: [DEVICE_TYPES.PHONE, OS.ANDROID],
    width: 360,
    height: 640
  },
  nexus7: {
    tags: [DEVICE_TYPES.TABLET, OS.ANDROID],
    name: "Nexus 7",
    width: 600,
    height: 960
  }
};

export default devices;
