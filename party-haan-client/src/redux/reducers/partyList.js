import coreReducer from './coreReducer';
import { PARTY_LIST } from '../../enums/reducerNames';

const REDUCER_NAME = PARTY_LIST;

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

export default coreReducer({ reducerName: REDUCER_NAME, initialState });
