import {createSlice} from "@reduxjs/toolkit";
import {ICity} from "@/storages/citys";

const initialState: ICity[] = [];
const citysStore = createSlice({
  name: 'citys',
  initialState,
  reducers: {
    addCity(state, action: { payload: ICity, type: string }) {
      state.push(action.payload)
    },
    removeCityByAdCode(state, action: { payload: ICity, type: string }) {
      const adcode = action.payload
      return state.filter(city => city.location.addressComponent.adcode !== adcode)
    }
  }
});

export const {addCity, removeCityByAdCode} = citysStore.actions;
export default citysStore.reducer;
