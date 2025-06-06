import {AreaPicker, Popup} from "@taroify/core";
import {areaList} from "@vant/area-data";
import {geo} from "@/utils/location";
import {taroGetWeatherByAdCode} from "@/utils/weather";
import {setLocation as setLocationStore, setWeather} from '@/store/reducers'
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/store";

import './index.scss';
import {setLocationStorage} from "@/storages/location";
import {setCityStorage} from "@/storages/citys";

export interface ILocationSelectorProp {
  isShow: boolean;
  setIsShow: (isShow: boolean) => void;
}

export const LocationSelector = (props: ILocationSelectorProp) => {
    const {isShow, setIsShow} = props;

    const dispatch = useDispatch<AppDispatch>();
    const setLocation = (value: string[]) => {
      const {province_list, city_list, county_list} = areaList;
      const province = province_list[value[0]];
      const city = city_list[value[1]];
      const county = county_list[value[2]];

      geo({
        adcode: value[2],
        address: province + city + county,
      }).then((res) => {
        const location = {
          longitude: res.geocodes[0].location.split(',')[0],
          latitude: res.geocodes[0].location.split(',')[1],
          addressComponent: res.geocodes[0],
        };
        setLocationStorage(location);
        dispatch(setLocationStore(location));

        taroGetWeatherByAdCode(county).then(weatherResult => {
          setCityStorage({weather: weatherResult, location: location, isCurrent: true});
          dispatch(setWeather(weatherResult));
        });
      });


    }

    return (
      <Popup open={isShow} rounded lock placement='bottom' style={{height: '50%'}}>
        <AreaPicker
          title='选择地区'
          areaList={areaList}
          onCancel={() => setIsShow(false)}
          onChange={(value) => {
            console.log(value);
          }}
          onConfirm={(value) => {
            setLocation(value);
            setIsShow(false);
          }}
        />
      </Popup>
    )
  }

;

