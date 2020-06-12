import coreReducer from './coreReducer';
import { USER } from '../../enums/reducerNames';
import { SET_DATA, LOGOUT } from '../../enums/actionTypes';

const REDUCER_NAME = USER;

let initialState = {
  isLoading: false,
  data: null,
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
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(data));
    }
    return {
      ...state,
      isLoading: false,
      error: null,
      data,
    };
  },
  [`${LOGOUT}${USER}`]: () => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('user', '');
    }
    return {
      isLoading: false,
      data: null,
      error: null,
    };
  },
};

export default coreReducer({ reducerName: REDUCER_NAME, initialState, customReducer });
