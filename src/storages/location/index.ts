import Taro from "@tarojs/taro";

export interface ILocation {
  latitude: number; // 纬度
  longitude: number;// 经度
  addressComponent: any;
}

export const setLocationStorage = (location: ILocation) => {
  Taro.setStorageSync('location', location);
}

export const getLocationStorage = () => {
  return Taro.getStorageSync<ILocation>('location');
}
