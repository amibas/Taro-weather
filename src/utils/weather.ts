import {amapConfig as config} from '@/config'
import Taro from "@tarojs/taro";
import {getLocationStorage} from "@/storages/location";
import {IWeather} from "@/storages/weather";

export const taroGetWeather = async () => {
  const liveWeatherResult = await taroGetLiveWeather()
  const forecastWeatherResult = await taroGetForecastWeather();

  const liveWeather = liveWeatherResult.lives[0];
  const forecastWeather = forecastWeatherResult.forecasts[0];


  return {
    live: liveWeather,
    forecast: forecastWeather
  } as IWeather;
};


export const taroGetLiveWeather = async () => {
  const location = getLocationStorage();
  const adcode = location.addressComponent.adcode;
  const result = await Taro.request({
    url: config.weatherUrl,
    method: 'GET',
    data: {
      key: config.key,
      city: adcode,
      extensions: 'base',
    }
  });
  return result.data;
};

export const taroGetForecastWeather = async () => {
  const location = getLocationStorage();
  const adcode = location.addressComponent.adcode;
  const result = await Taro.request({
    url: config.weatherUrl,
    method: 'GET',
    data: {
      key: config.key,
      city: adcode,
      extensions: 'all',
    }
  });
  return result.data;
};
