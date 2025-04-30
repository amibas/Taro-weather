import {createSlice} from "@reduxjs/toolkit";
import {ILocation} from "@/storages/location";

const initialState: ILocation = {
  latitude: 0,
  longitude: 0,
  addressComponent: {},
}

const locationStore = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation(state, action) {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
      state.addressComponent = action.payload.addressComponent;
    }
  }
})

export const {setLocation} = locationStore.actions;
export default locationStore.reducer;
