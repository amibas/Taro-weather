import {useLoad} from '@tarojs/taro'
import {ForecastWeatherCard, TodayWeatherCard} from "@/components";
import {taroGetLocation} from "@/utils/location";
import {setLocationStorage} from "@/storages/location";
import {taroGetWeather} from "@/utils/weather";
import {setWeatherStorge} from "@/storages/weather";
import './index.scss'

export default function Index() {
  useLoad(async () => {
    console.log('Page loaded.');
    const location = await taroGetLocation();
    setLocationStorage(location);
    const weather = await taroGetWeather();
    setWeatherStorge(weather);
  });

  return (
    <div className='container'>
      <TodayWeatherCard />
      <ForecastWeatherCard />
    </div>
  )
}
