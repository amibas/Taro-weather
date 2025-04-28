import {useLoad} from '@tarojs/taro'
import {TodayWeatherCard} from "@/components";
import {taroGetLocation} from "@/utils/location";
import {getLocation} from "@/storage/location";
import {taroGetWeather} from "@/utils/weather";

import './index.scss'

export default function Index() {
  useLoad(async () => {
    console.log('Page loaded.');
    await taroGetLocation();
    console.log(await getLocation());
    console.log(await taroGetWeather());
  })

  return (
    <div className='container'>
      <TodayWeatherCard/>
    </div>
  )
}
