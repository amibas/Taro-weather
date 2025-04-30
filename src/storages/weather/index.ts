import Taro from "@tarojs/taro";

interface IForecastWeather {
  city: string,
  adcode: string,
  province: string,
  reporttime: string,
  casts: {
    date: string,
    week: string,
    dayweather: string,
    nightweather: string,
    daytemp: string,
    nighttemp: string,
    daywind: string,
    nightwind: string,
    daypower: string,
    nightpower: string
  }[]
}

interface ILiveWeather {
  province: string,
  city: string,
  adcode: string,
  weather: string,
  temperature: string,
  winddirection: string,
  windpower: string,
  humidity: string,
  reporttime: string
}

export interface IWeather {
  forecast: IForecastWeather,
  live: ILiveWeather
}

export const setWeatherStorge = (weather: IWeather) => {
  Taro.setStorageSync('weather', weather);
}

export const getWeatherStorge = () => {
  return Taro.getStorageSync<IWeather>('weather');
}
