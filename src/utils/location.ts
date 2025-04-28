import Taro from "@tarojs/taro";
import {getLocationStorage, setLocationStorage} from "@/storages/location";
import {amapConfig as config} from '@/config'

export const regeo = async (location: { longitude: number, latitude: number }) => {
  const result = await Taro.request({
    url: config.geoUrl,
    method: 'GET',
    data: {
      key: config.key,
      location: `${location.longitude},${location.latitude}`
    }
  });
  return result.data;
}
export const taroGetLocation = async () => {
  const location = await Taro.getLocation({
    type: 'wgs84',
  });
  const addressComponentResult = await regeo({longitude: location.longitude, latitude: location.latitude});

  setLocationStorage({
    latitude: location.latitude,
    longitude: location.longitude,
    addressComponent: addressComponentResult.regeocode.addressComponent
  });

  return getLocationStorage();
}
