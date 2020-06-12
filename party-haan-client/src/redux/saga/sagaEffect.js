/* eslint-disable func-names */
/* eslint-disable import/no-cycle */
import { call, put, select } from 'redux-saga/effects';

import {
  SET_DATA,
  SET_ERROR,
  SET_LOADING,
} from '../../enums/actionTypes';

import {
  PARTY_LIST,
  USER,
} from '../../enums/reducerNames';

import { selectUser } from '../selects';

import {
  getPartyListHandler,
  createUserHandler,
  loginHandler,
} from '../../api/apiHandler';

const getPartyList = function* (action) {
  yield put({ type: `${SET_LOADING}${PARTY_LIST}` });
  const { queryString } = action.payload;
  const user = yield select(selectUser);
  const { token } = user;
  let result;
  try {
    result = yield call(getPartyListHandler, token, queryString);
  } catch (error) {
    yield put({
      type: `${SET_ERROR}${PARTY_LIST}`,
      payload: { data: [], error: error.message },
    });
  }
  if (result) {
    yield put({
      type: `${SET_DATA}${PARTY_LIST}`,
      payload: { data: result.data.data },
    });
  }
};

const createUser = function* (action) {
  yield put({ type: `${SET_LOADING}${USER}` });
  let result;
  try {
    result = yield call(createUserHandler, action.payload);
  } catch (error) {
    yield put({
      type: `${SET_ERROR}${USER}`,
      payload: { data: null, error: error.message },
    });
  }
  if (result) {
    yield put({
      type: `${SET_DATA}${USER}`,
      payload: { data: result.data.data },
    });
  }
};

const loginUser = function* (action) {
  yield put({ type: `${SET_LOADING}${USER}` });
  let result;
  try {
    result = yield call(loginHandler, action.payload);
    if (result) {
      yield put({
        type: `${SET_DATA}${USER}`,
        payload: { data: result.data.data },
      });
    }
  } catch (error) {
    if (error.response && error.response.data) {
      console.log(error.response);
      yield put({
        type: `${SET_ERROR}${USER}`,
        payload: { data: null, error: error.response.data.message },
      });
    } else {
      yield put({
        type: `${SET_ERROR}${USER}`,
        payload: { data: null, error: error.message },
      });
    }
  }
};

export {
  createUser,
  getPartyList,
  loginUser,
};
export default {
  createUser,
  getPartyList,
  loginUser,
};
