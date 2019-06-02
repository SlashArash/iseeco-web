import React from 'react';

import IDevice from 'types/IDevice';
import mapDeviceType from 'lib/mapDeviceType';

import { Card, CardBody, ImageIcon } from './styles';

import bulbActive from 'assets/images/icons/bulb-active.png';
import bulb from 'assets/images/icons/bulb-dark.png';
import windowActive from 'assets/images/icons/window-active.png';
import window from 'assets/images/icons/window-dark.png';
import airConditionerActive from 'assets/images/icons/air-conditioner-active.png';
import airConditioner from 'assets/images/icons/air-conditioner-dark.png';
import thermostatActive from 'assets/images/icons/thermostat-active.png';
import thermostat from 'assets/images/icons/thermostat-dark.png';
import dancingLightActive from 'assets/images/icons/dancing-light-active.png';
import dancingLight from 'assets/images/icons/dancing-light-dark.png';
import chandelierActive from 'assets/images/icons/chandelier-active.png';
import chandelier from 'assets/images/icons/chandelier-dark.png';
import socketActive from 'assets/images/icons/socket-active.png';
import socket from 'assets/images/icons/socket-dark.png';
import fanActive from 'assets/images/icons/fan-active.png';
import fan from 'assets/images/icons/fan-dark.png';
import elevatorActive from 'assets/images/icons/elevator-active.png';
import elevator from 'assets/images/icons/elevator-dark.png';
import lockActive from 'assets/images/icons/lock-active.png';
import lock from 'assets/images/icons/lock-dark.png';
import musicActive from 'assets/images/icons/music-active.png';
import music from 'assets/images/icons/music-dark.png';
import fountainActive from 'assets/images/icons/fountain-active.png';
import fountain from 'assets/images/icons/fountain-dark.png';
import starActive from 'assets/images/icons/star-active.png';
import star from 'assets/images/icons/star-dark.png';

interface IComponentProps {
  device: IDevice;
  onClick: () => void;
}

const getIcon = (device: IDevice) => {
  const deviceType = mapDeviceType(device.type);
  let icon = bulb;
  if (deviceType === 'curtain') {
    icon = device.active === 'on' ? windowActive : window;
  } else if (deviceType === 'thermostat') {
    if (device.iconnumber === '2') {
      icon = device.active === 'on' ? thermostatActive : thermostat;
    } else {
      icon = device.active === 'on' ? airConditionerActive : airConditioner;
    }
  } else if (deviceType === 'lamp') {
    if (device.iconnumber === '1') {
      icon = device.active === 'on' ? bulbActive : bulb;
    } else if (device.iconnumber === '2') {
      // dancing light
      icon = device.active === 'on' ? dancingLightActive : dancingLight;
    } else if (device.iconnumber === '3') {
      // chandelier
      icon = device.active === 'on' ? chandelierActive : chandelier;
    } else if (device.iconnumber === '4') {
      // socket
      icon = device.active === 'on' ? socketActive : socket;
    } else if (device.iconnumber === '5') {
      // fan
      icon = device.active === 'on' ? fanActive : fan;
    } else if (device.iconnumber === '6') {
      // elevator
      icon = device.active === 'on' ? elevatorActive : elevator;
    } else if (device.iconnumber === '7') {
      // lock
      icon = device.active === 'on' ? lockActive : lock;
    } else if (device.iconnumber === '8') {
      // music
      icon = device.active === 'on' ? musicActive : music;
    } else if (device.iconnumber === '9') {
      // fountain
      icon = device.active === 'on' ? fountainActive : fountain;
    } else if (device.iconnumber === '10') {
      // light box
      icon = device.active === 'on' ? starActive : star;
    }
  }
  return icon;
};

const DeviceCard: React.StatelessComponent<IComponentProps> = ({
  device,
  onClick,
}) => {
  const icon = getIcon(device);
  return (
    <Card onClick={onClick}>
      <CardBody>
        <ImageIcon src={icon} />
        <p>{device.name}</p>
      </CardBody>
    </Card>
  );
};

export default DeviceCard;
