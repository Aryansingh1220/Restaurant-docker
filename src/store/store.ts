
import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from './reservationSlice';
import menuReducer from './menuSlice';

export const store = configureStore({
  reducer: {
    reservation: reservationReducer,
    menu: menuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
