import {Navbar} from "@taroify/core";
import Taro from "@tarojs/taro";
import {View} from "@tarojs/components";
import {CityInfo} from "@/components/CityInfo";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import {useLayoutEffect} from "react";
import {getCityStateByStorage} from "@/store/reducers";


export default function City() {
  const dispatch = useDispatch<AppDispatch>();
  const currentCity = useSelector((state: RootState) => state.citys.find(item => item.isCurrent), shallowEqual)
  const otherCitys = useSelector((state: RootState) => state.citys.filter(item => !item.isCurrent), shallowEqual);
  useLayoutEffect(() => {
    dispatch(getCityStateByStorage())
  }, []);

  const handelBack = () => {
    Taro.navigateBack().then();
  }

  return (
    <View style={{height: '100vh', width: '100vw'}}>
      <Navbar style={{margin: '82.5rpx 0'}} title='城市管理'>
        <Navbar.NavLeft onClick={handelBack}>返回</Navbar.NavLeft>
      </Navbar>
      <View style={{width: '750rpx'}}>
        <View style={{fontSize: '35rpx', marginLeft: '35rpx'}}>当前城市：</View>
        <View style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
          {currentCity && <CityInfo city={currentCity}/>}
        </View>
        <View style={{fontSize: '35rpx', marginLeft: '35rpx'}}>已添加城市：</View>
        <View style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
          {
            otherCitys && otherCitys.map(item => {
              return <CityInfo key={item.location.addressComponent.adcode} city={item}/>
            })
          }
        </View>
      </View>
    </View>
  );
}
