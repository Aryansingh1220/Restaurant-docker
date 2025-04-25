
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

interface ReservationState {
  reservations: Reservation[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ReservationState = {
  reservations: [],
  isLoading: false,
  error: null,
};

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<Omit<Reservation, 'id' | 'status'>>) => {
      const newReservation: Reservation = {
        ...action.payload,
        id: Date.now().toString(),
        status: 'pending',
      };
      state.reservations.push(newReservation);
    },
    updateReservationStatus: (state, action: PayloadAction<{ id: string; status: Reservation['status'] }>) => {
      const { id, status } = action.payload;
      const reservation = state.reservations.find(res => res.id === id);
      if (reservation) {
        reservation.status = status;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { addReservation, updateReservationStatus, setLoading, setError } = reservationSlice.actions;
export default reservationSlice.reducer;
