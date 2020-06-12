import {
  LOAD,
  CREATE,
} from '../enums/actionTypes';

import {
  PARTY_LIST,
  USER,
} from '../enums/reducerNames';

export const loadPartyList = ({ queryString } = {}) => ({
  type: `${LOAD}${PARTY_LIST}`,
  payload: { queryString },
});
