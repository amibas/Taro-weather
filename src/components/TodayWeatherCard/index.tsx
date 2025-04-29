import {useEffect, useState} from "react";
import {getLocationStorage, ILocation} from "@/storages/location";
import {getWeatherStorge, IWeather} from "@/storages/weather";

import "./index.scss";

export const TodayWeatherCard = () => {
  const [location, setLocation] = useState<ILocation>();
  const [weather, setWeather] = useState<IWeather>();

  useEffect(() => {
    const fetchState = async () => {
      try {
        const locationStorage = await getLocationStorage();
        const weatherStorage = await getWeatherStorge();
        setLocation(locationStorage);
        setWeather(weatherStorage);
      } catch (error) {
        // 递归调用，直到成功获取位置
        await fetchState();
      }
    };

    if (!location) {
      fetchState().then();
    }
  }, [location, weather]);

  return (
    <div className='card'>
      <section className='location'>
        {location?.addressComponent.province}
        {location?.addressComponent.city}
        {location?.addressComponent.district}
        {location?.addressComponent.township}
      </section>
      <section className='weather'>
        <div className='current-temperature'>{weather?.live.temperature}°</div>
        <div className='current-weather'>
          <span>{weather?.live.weather}</span>
          <span>最高{weather?.forecast.casts[0].daytemp}°</span>
          <span>最低{weather?.forecast.casts[0].nighttemp}°</span>
        </div>
        <div className='other-information'>
          <button className='air-quality'>空气湿度 {weather?.live.humidity}</button>
          <button className='wind'>{weather?.live.winddirection}风{weather?.live.windpower}</button>
        </div>
      </section>
    </div>
  );
};
