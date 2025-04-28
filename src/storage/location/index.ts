import Taro from "@tarojs/taro";

export interface ILocation {
  latitude: number; // 纬度
  longitude: number;// 经度
  addressComponent: any;
}

export const setLocation = (location: ILocation) => {
  Taro.setStorageSync('location', location);
}

export const getLocation = async () => {
  return await Taro.getStorage<ILocation>({
    key: 'location'
  }).then((result) => {
      return result.data;
    }
  );
}
