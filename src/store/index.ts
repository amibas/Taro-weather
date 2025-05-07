import {configureStore} from '@reduxjs/toolkit';
import locationReducer from './reducers/location';
import weatherReducer from './reducers/weather';
import cityReducer from './reducers/citys'

export const store = configureStore({
  reducer: {
    location: locationReducer,
    weather: weatherReducer,
    citys: cityReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
