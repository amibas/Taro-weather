import './index.scss'
import {ICity} from "@/storages/citys";

export interface ICityInfoProp {
  city: ICity;
}

export const CityInfo = (prop: ICityInfoProp) => {
  const {location, weather} = prop.city;

  return (
    <div className='city-info-card'>
      <section className='left'>
        <div className='location'>{location.addressComponent.district}{location.addressComponent.township}</div>
        <div className='weather'>{weather.live.weather}</div>
      </section>
      <section className='right'>
        <div className='current-temperature'>{weather.live.temperature}°</div>
        <div className='temperature'>{weather.forecast.casts[0].daytemp}°/{weather.forecast.casts[0].nighttemp}°</div>
      </section>
    </div>
  )
}
