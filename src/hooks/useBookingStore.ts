import { useReducer } from 'react';
import { BookingStoreActionType } from '../enums/BookingStoreActionType';
import { BookingState, Store, StoreAction } from '../interfaces';

function reducer(
  state: BookingState,
  action: StoreAction<BookingStoreActionType>
) {
  return Object.assign({}, state);
}

export const initialState: BookingState = {
  selectedBookingConfig: '',
};

export function useBookingStore(): Store<BookingState, BookingStoreActionType> {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    getState: () => Object.assign({}, state),
    dispatch: (action: StoreAction<BookingStoreActionType>) => {
      return dispatch(action);
    },
  };
}
