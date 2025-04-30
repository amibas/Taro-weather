import {PropsWithChildren} from 'react'
import {useLaunch} from '@tarojs/taro'
import {Provider} from "react-redux";
import {store} from '@/store';
import {taroGetLocation} from "@/utils/location";
import {setLocationStorage} from "@/storages/location";
import {taroGetWeather} from "@/utils/weather";
import {setWeatherStorge} from "@/storages/weather";

import './app.scss'

function App({children}: PropsWithChildren<any>) {
  useLaunch(async () => {
    console.log('App launched.');

  })

  // children 是将要会渲染的页面
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}


export default App
