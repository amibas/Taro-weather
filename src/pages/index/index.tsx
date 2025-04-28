import {useLoad} from '@tarojs/taro'
import {TodayWeatherCard} from "@/components";
import {taroGetLocation} from "@/utils/location";
import {getLocation} from "@/storage/location";

import './index.scss'

export default function Index() {
  useLoad(async () => {
    console.log('Page loaded.');
    console.log(await taroGetLocation());
    console.log(await getLocation());
  })


  return (
    <div className='container'>
      <TodayWeatherCard />
    </div>
  )
}
