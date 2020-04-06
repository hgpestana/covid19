import {createStore} from 'redux';
import {storeReducer} from '../reducers';
import {Store} from '../types';
import {Action} from '../actions';

const store = createStore<Store, Action, {}, {}>(storeReducer);
export default store;
