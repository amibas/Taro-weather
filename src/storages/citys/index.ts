import {ILocation} from "@/storages/location";
import {IWeather} from "@/storages/weather";
import Taro from "@tarojs/taro";

export interface ICity {
  location: ILocation;
  weather: IWeather;
  isCurrent: boolean;
}

export const setCityStorage = (city: ICity) => {
  console.log(city);
  try {
    const storage = Taro.getStorageSync('citys');
    if (storage.some((item: ICity) => item.location.latitude === city.location.latitude && item.location.longitude === city.location.longitude)) {
      return;
    }
    // 将其他city的isCurrent设置为false
    storage.forEach((item: ICity) => {
      item.isCurrent = false;
    })
    Taro.setStorageSync('citys', [...storage, city]);
  } catch (error) {
    console.log(error);
    Taro.setStorageSync('citys', [city]);
  }
}

export const getCityStorage = () => {
  return Taro.getStorageSync<ICity[]>('citys');
}
