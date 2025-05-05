import {Navbar} from "@taroify/core";
import Taro from "@tarojs/taro";

export default function City() {
  const handelBack = () => {
    Taro.navigateBack().then();
  }

  return (
    <Navbar style={{margin:'40px 0'}} title='城市管理'>
      <Navbar.NavLeft onClick={handelBack}>返回</Navbar.NavLeft>
    </Navbar>
  );
}
