import { Context, createContext, PropsWithChildren } from 'react';
import { BookingStoreActionType } from '../enums';
import { useBookingStore } from '../hooks';
import { BookingState, Store } from '../interfaces';

type BookingStoreContextType = Store<BookingState, BookingStoreActionType>;
type BookingStoreProviderProps = PropsWithChildren<{}>;

export const BookingStoreContext: Context<BookingStoreContextType | null> =
  createContext<BookingStoreContextType | null>(null);

export const BookingStoreProvider = ({
  children,
}: BookingStoreProviderProps) => {
  const store = useBookingStore();

  return (
    <BookingStoreContext.Provider value={store}>
      {children}
    </BookingStoreContext.Provider>
  );
};
