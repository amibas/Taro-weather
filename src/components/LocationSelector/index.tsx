import {AreaPicker, Popup} from "@taroify/core";
import {areaList} from "@vant/area-data";

import './index.scss';

export interface ILocationSelectorProp {
  isShow: boolean;
  setIsShow: (isShow: boolean) => void;
}


export const LocationSelector = (props: ILocationSelectorProp) => {
  const {isShow, setIsShow} = props;

  return (
    <Popup open={isShow} rounded lock placement='bottom' style={{height: '50%'}}>
      <AreaPicker areaList={areaList} onCancel={() => setIsShow(false)}/>
    </Popup>
  )
};

