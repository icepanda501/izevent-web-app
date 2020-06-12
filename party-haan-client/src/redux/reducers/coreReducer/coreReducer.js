import { SET_DATA, SET_ERROR, SET_LOADING } from '../../../enums/actionTypes';

const setLoading = (state) => ({
  ...state,
  isLoading: true,
});

const setData = (state, payload) => {
  const { data } = payload;
  return {
    ...state,
    isLoading: false,
    data,
  };
};

const setError = (state, payload) => {
  const { data, error } = payload;
  return {
    ...state,
    isLoading: false,
    error,
    data,
  };
};

const coreReducer = ({
  reducerName,
  initialState,
  customReducer = {} }) => (state = initialState, action) => {
  const reducerSwitch = {
    [`${SET_LOADING}${reducerName}`]: setLoading,
    [`${SET_DATA}${reducerName}`]: setData,
    [`${SET_ERROR}${reducerName}`]: setError,
    ...customReducer,
  };
  const defaultReducer = () => state;
  const newState = reducerSwitch[action.type] || defaultReducer;
  return newState(state, action.payload);
};

export default coreReducer;
