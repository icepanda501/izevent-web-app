/* eslint-disable import/no-cycle */
import { takeEvery } from 'redux-saga/effects';

import {
  LOAD,
  CREATE,
  LOGIN,
} from '../../enums/actionTypes';

import {
  PARTY_LIST,
  USER,
} from '../../enums/reducerNames';

import {
  getPartyList,
  createUser,
  loginUser,
} from './sagaEffect';

function* saga() {
  yield takeEvery(`${LOAD}${PARTY_LIST}`, getPartyList);
  yield takeEvery(`${CREATE}${USER}`, createUser);
  yield takeEvery(`${LOGIN}${USER}`, loginUser);
}

export default saga;
