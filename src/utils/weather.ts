import {amapConfig as config} from '@/config'
import Taro from "@tarojs/taro";
import {getLocationStorage} from "@/storages/location";
import {setWeatherStorge} from "@/storages/weather";

export const taroGetWeather = async () => {
  const liveWeather = await taroGetLiveWeather()
  const forecastWeather = await taroGetForecastWeather();

  await setWeatherStorge({
    live: liveWeather.lives[0],
    forecast: forecastWeather.forecasts[0],
  });

  return {
    liveResult: liveWeather,
    forecastResult: forecastWeather,
  };
};


export const taroGetLiveWeather = async () => {
  const location = await getLocationStorage();
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
  const location = await getLocationStorage();
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
