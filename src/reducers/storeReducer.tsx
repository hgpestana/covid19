import {Store} from '../types';
import {Action} from '../actions';
import {SET_BULLETINS, SET_CONTACTS, SET_INFORMATION} from '../constants';

export const initialState: Store = {
  information: [],
  bulletins: [],
  contacts: [],
};

const storeReducer = (state: Store = initialState, action: Action): Store => {
  switch (action.type) {
    case SET_INFORMATION:
      return {
        ...state,
        information: action.information,
      };
    case SET_CONTACTS:
      return {
        ...state,
        contacts: action.contacts,
      };
    case SET_BULLETINS:
      return {
        ...state,
        bulletins: action.bulletins,
      };
  }
  return state;
};

export default storeReducer;
