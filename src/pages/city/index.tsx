import {Navbar} from "@taroify/core";
import Taro from "@tarojs/taro";
import {View} from "@tarojs/components";
import {CityInfo} from "@/components/CityInfo";

export default function City() {
  const handelBack = () => {
    Taro.navigateBack().then();
  }

  return (
    <View style={{height: '100vh', width: '100vw'}}>
      <Navbar style={{margin: '82.5rpx 0'}} title='城市管理'>
        <Navbar.NavLeft onClick={handelBack}>返回</Navbar.NavLeft>
      </Navbar>
      <View style={{height: '100dvh', width: '750rpx', padding: '20rpx'}}>
        <View style={{fontSize: '35rpx', marginLeft: '35rpx'}}>当前城市：</View>
        <CityInfo/>
        <View style={{fontSize: '35rpx', marginLeft: '35rpx'}}>已添加城市：</View>
        <CityInfo/>
      </View>
    </View>
  );
}
