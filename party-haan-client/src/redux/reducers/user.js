import coreReducer from './coreReducer';
import { USER } from '../../enums/reducerNames';
import { SET_DATA } from '../../enums/actionTypes';

const REDUCER_NAME = USER;

let initialState = {
  isLoading: false,
  data: [],
  error: null,
};

if (typeof localStorage !== 'undefined') {
  if (localStorage.getItem('user')) {
    initialState = {
      ...initialState,
      data: JSON.parse(localStorage.getItem('user')),
    };
  }
}

const customReducer = {
  [`${SET_DATA}${REDUCER_NAME}`]: (state, payload) => {
    const { data } = payload;
    return {
      ...state,
      isLoading: false,
      data,
    };
  },
};

export default coreReducer({ reducerName: REDUCER_NAME, initialState, customReducer });
