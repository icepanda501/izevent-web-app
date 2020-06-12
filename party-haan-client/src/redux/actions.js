import {
  LOAD,
  CREATE,
  LOGIN,
  LOGOUT,
} from '../enums/actionTypes';

import {
  PARTY_LIST,
  USER,
} from '../enums/reducerNames';

export const loadPartyList = ({ queryString } = {}) => ({
  type: `${LOAD}${PARTY_LIST}`,
  payload: { queryString },
});

export const createUser = (payload) => ({
  type: `${CREATE}${USER}`,
  payload,
});

export const loginUser = (payload) => ({
  type: `${LOGIN}${USER}`,
  payload,
});

export const logoutUser = () => ({
  type: `${LOGOUT}${USER}`,
});
