import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import {LocationSelector} from "@/components/LocationSelector";
import {getLocationStorage} from "@/storages/location";
import {getWeatherStorge} from "@/storages/weather";
import {setLocation, setWeather} from "@/store/reducers";
import "./index.scss";

export const TodayWeatherCard = () => {
  const dispatch = useDispatch<AppDispatch>()
  const location = useSelector((state: RootState) => state.location);
  const weather = useSelector((state: RootState) => state.weather);

  useEffect(() => {
    const locationStorage = getLocationStorage();
    const weatherStorage = getWeatherStorge();
    console.log(locationStorage, weatherStorage);
    dispatch(setLocation(locationStorage));
    dispatch(setWeather(weatherStorage));
  }, [dispatch]);

  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <div className='weather-card'>
      <section className='location' onClick={() => setIsShow(true)}>
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
      <LocationSelector isShow={isShow} setIsShow={setIsShow}/>
    </div>
  );
};
