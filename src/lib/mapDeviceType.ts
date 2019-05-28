import { deviceType } from '../types/types';

const mapDeviceType = (
  type: deviceType
): 'lamp' | 'thermostat' | 'curtain' | undefined => {
  if (type === '16') {
    return 'curtain';
  } else if (type === '2') {
    return 'lamp';
  } else if (type === '1') {
    return 'thermostat';
  }
  return;
};

export default mapDeviceType;
