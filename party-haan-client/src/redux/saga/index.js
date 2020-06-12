/* eslint-disable import/no-cycle */
import { takeEvery } from 'redux-saga/effects';

import {
  LOAD,
} from '../../enums/actionTypes';

import {
  PARTY_LIST,
} from '../../enums/reducerNames';

import {
  getPartyList,
} from './sagaEffect';

function* saga() {
  yield takeEvery(`${LOAD}${PARTY_LIST}`, getPartyList);
}

export default saga;
