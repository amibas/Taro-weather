import Taro from "@tarojs/taro";
import {amapConfig as config} from '@/config'
import {ILocation} from "@/storages/location";

export const regeo = async (location: { longitude: number, latitude: number }) => {
  const result = await Taro.request({
    url: config.regeoUrl,
    method: 'GET',
    data: {
      key: config.key,
      location: `${location.longitude},${location.latitude}`
    }
  });
  return result.data;
}

export const geo = async (location: { address: string, adcode: string }) => {
  const result = await Taro.request({
    url: config.geoUrl,
    method: 'GET',
    data: {
      key: config.key,
      address: location.address,
      city: location.adcode,
    }
  });
  return result.data;
}

export const taroGetLocation = async () => {
  const location = await Taro.getLocation({
    type: 'wgs84',
  });
  const addressComponentResult = await regeo({longitude: location.longitude, latitude: location.latitude});

  return ({
    latitude: location.latitude,
    longitude: location.longitude,
    addressComponent: addressComponentResult.regeocode.addressComponent
  }) as ILocation;
}
