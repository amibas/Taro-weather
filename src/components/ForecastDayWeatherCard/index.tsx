import {RootState} from '@/store';
import {useSelector} from 'react-redux';

import './index.scss'

export const ForecastWeatherCard = () => {
  const weather = useSelector((state: RootState) => state.weather);

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
