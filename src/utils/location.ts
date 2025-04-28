import Taro from "@tarojs/taro";
import {setLocation} from "@/storage/location";

export const taroGetLocation = async () => {
  const location = await Taro.getLocation({
    type: 'wgs84',
  });

  setLocation({longitude: location.longitude, latitude: location.latitude});

  return location;
}
