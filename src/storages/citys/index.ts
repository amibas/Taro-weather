import {ILocation} from "@/storages/location";
import {IWeather} from "@/storages/weather";
import Taro from "@tarojs/taro";

export interface ICity {
  location: ILocation;
  weather: IWeather;
  isCurrent: boolean;
}

export const setCityStorage = (city: ICity) => {
  try {
    const storage = Taro.getStorageSync('citys');
    // 是否已经存在
    if (storage.some((item: ICity) => item.location.addressComponent.adcode === city.location.addressComponent.adcode)) {
      storage.forEach((item: ICity) => {
        item.isCurrent = item.location.addressComponent.adcode === city.location.addressComponent.adcode;
      })
      Taro.setStorageSync('citys', storage);
      return;
    }

    storage.forEach((item: ICity) => {
      item.isCurrent = false;
    });
    Taro.setStorageSync('citys', [...storage, city]);
    return;
  } catch (error) {
    console.log(error);
    Taro.setStorageSync('citys', [city]);
    return;
  }
}

export const getCityStorage = () => {
  return Taro.getStorageSync<ICity[]>('citys');
}
