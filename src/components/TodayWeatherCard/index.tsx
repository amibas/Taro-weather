import {useState} from "react";
import {getLocation, ILocation} from "@/storage/location";

import "./index.scss";

export const TodayWeatherCard = () => {
  const [location, setLocation] = useState<ILocation>();
  getLocation().then(res => {
    setLocation(res);
  })

  return (
    <div className='card'>
      <section className='location'>
        {location?.addressComponent.province}
        {location?.addressComponent.city}
        {location?.addressComponent.district}
        {location?.addressComponent.township}
      </section>
      <section className='weather'>
        <div className='current-temperature'>26°</div>
        <div className='current-weather'>
          <span>阴</span>
          <span>最高27°</span>
          <span>最低16°</span>
        </div>
        <div className='other-information'>
          <button className='air-quality'>空气良 56</button>
          <button className='wind'>东南风</button>
        </div>
      </section>
    </div>
  );
};
