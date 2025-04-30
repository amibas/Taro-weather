import {configureStore} from '@reduxjs/toolkit';
import locationReducer from './reducers/location';
import weatherReducer from './reducers/weather'

export const store = configureStore({
  reducer: {
    location: locationReducer,
    weather: weatherReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
