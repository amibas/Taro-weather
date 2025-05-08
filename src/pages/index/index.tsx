import Taro, {useLoad} from "@tarojs/taro";
import {ForecastWeatherCard, TodayWeatherCard} from "@/components";
import {taroGetLocation} from "@/utils/location";
import {setLocationStorage} from "@/storages/location";
import {taroGetWeather} from "@/utils/weather";
import {setWeatherStorge} from "@/storages/weather";
import "./index.scss";
import {useState} from "react";
import {Loading, Navbar, Popup} from "@taroify/core";
import {ICity, setCityStorage} from "@/storages/citys";


export const setStorgeCallback = async () => {
  try {
    const settingResult = await Taro.getSetting();
    const hasLocationPermission = settingResult.authSetting?.["scope.userLocation"];
    if (!hasLocationPermission) {
      await Taro.authorize({
        scope: "scope.userLocation",
      });
    }
    const location = await taroGetLocation();
    setLocationStorage(location);
    const weather = await taroGetWeather();
    setWeatherStorge(weather);
    setCityStorage({location, weather, isCurrent: true} as ICity);
    return {
      location,
      weather,
      success: true,
      message: '数据获取成功',
    };
  } catch (error) {
    console.error('数据获取失败', error);
    return {
      location: null,
      weather: null,
      success: false,
      message: '数据获取失败',
    }
  }
};

export default function Index() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useLoad(async () => {
    console.log("Page loaded.");
    const result = await setStorgeCallback();
    console.log(result);
    if (result.success) {
      setIsLoading(false);
    } else {
      await Taro.showToast({
        title: result.message,
        icon: 'none',
      });
    }
  });

  if (isLoading) {
    return (
      <Popup open rounded style={{padding: '64px'}}>
        <Loading type='spinner' direction='vertical'>加载中</Loading>
      </Popup>
    );
  }

  return (
    <>
      <Navbar style={{margin: '82.5rpx 0'}} title='主页'/>
      <div className="container">
        <TodayWeatherCard/>
        <ForecastWeatherCard/>
      </div>
    </>
  );
}
