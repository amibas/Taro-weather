import {useLoad} from '@tarojs/taro'
import {TodayWeatherCard} from "@/components";
import {taroGetLocation} from "@/utils/location";
import {getLocationStorage} from "@/storages/location";
import {taroGetWeather} from "@/utils/weather";
import {getWeatherStorge} from "@/storages/weather";

import './index.scss'

export default function Index() {
  useLoad(async () => {
    console.log('Page loaded.');
    await taroGetLocation();
    console.log(await getLocationStorage());
    await taroGetWeather();
    console.log(await getWeatherStorge());
  })

  return (
    <div className='container'>
      <TodayWeatherCard/>
    </div>
  )
}
