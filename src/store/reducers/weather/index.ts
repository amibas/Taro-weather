import {IWeather} from "@/storages/weather";
import {createSlice} from "@reduxjs/toolkit";

const initialState: IWeather = {
  forecast: {
    city: "",
    adcode: "",
    province: "",
    reporttime: "",
    casts: [
      {
        date: "",
        week: "",
        dayweather: "",
        nightweather: "",
        daytemp: "",
        nighttemp: "",
        daywind: "",
        nightwind: "",
        daypower: "",
        nightpower: ""
      }
    ]
  },
  live: {
    province: "",
    city: "",
    adcode: "",
    weather: "",
    temperature: "",
    winddirection: "",
    windpower: "",
    humidity: "",
    reporttime: ""
  }
}

const weatherStore = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather(state, action) {
      state.live = action.payload.live;
      state.forecast = action.payload.forecast;
    }
  }
})

export const {setWeather} = weatherStore.actions;
export default weatherStore.reducer;
