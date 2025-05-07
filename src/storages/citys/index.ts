import {ILocation} from "@/storages/location";
import {IWeather} from "@/storages/weather";
import Taro from "@tarojs/taro";

export interface ICity {
  location: ILocation;
  weather: IWeather;
}

export const setCityStorage = (city: ICity) => {
  const storage = Taro.getStorageSync('citys');
  if (!storage) {
    Taro.setStorageSync('citys', [city]);
  }
  if (storage.some((item: ICity) => item.location.latitude === city.location.latitude && item.location.longitude === city.location.longitude)) {
    return;
  }
  Taro.setStorageSync('citys', [...storage, city]);
}

export const getCityStorage = () => {
  return Taro.getStorageSync<ICity[]>('citys');
}
