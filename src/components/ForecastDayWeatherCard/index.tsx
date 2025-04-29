import {useEffect, useState} from 'react';
import {getWeatherStorge, IWeather} from "@/storages/weather";

import './index.scss'

export const ForecastWeatherCard = () => {
  const [weather, setWeather] = useState<IWeather>();

  useEffect(() => {
    const fetchState = async () => {
      try {
        const weatherStorage = await getWeatherStorge();
        setWeather(weatherStorage);
      } catch (error) {
        // 递归调用，直到成功获取位置
        await fetchState();
      }
    };

    if (!weather) {
      fetchState().then();
    }
  }, [weather]);

  return (
    <div className='forecast-card'>
      <div className='forecast-info'>
        {
          weather?.forecast?.casts && weather?.forecast?.casts.map((item, index) => (
            index < 3 && (
              <div className='info' key={index}>
                <div className='time'>周 {item.week}</div>
                <div className='weather'>{item.dayweather}</div>
                <div className='temperature'>{item.daytemp}° ~ {item.nighttemp}°</div>
              </div>
            )
          ))
        }
      </div>
    </div>
  );
}
