import { StoreAction } from './storeAction';

export interface Store<State, ActionType> {
  getState: () => State;
  dispatch: (action: StoreAction<ActionType>) => void;
}
