import {amapConfig as config} from '@/config'
import Taro from "@tarojs/taro";
import {getLocation} from "@/storage/location";

export const taroGetWeather = async () => {
  const location = await getLocation();
  const adcode = location.addressComponent.adcode;
  const result = await Taro.request({
    url: config.weatherUrl,
    method: 'GET',
    data: {
      key: config.key,
      city: adcode,
      extensions: 'all',
    }
  });
  return result.data;
}
