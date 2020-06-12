/* eslint-disable prefer-destructuring */
/* eslint-disable import/no-cycle */
import Axios from 'axios';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

console.log('REACT_APP_API_URL : ', REACT_APP_API_URL);

const axiosRequest = async ({
  url,
  token,
  payload,
  method,
  responseType,
  query,
  baseUrl,
}) => {
  let result;
  try {
    result = await Axios({
      url: baseUrl ? `${baseUrl}${url}` : `${REACT_APP_API_URL}${url}`,
      method,
      data: payload,
      responseType,
      params: query,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log('error : ', error);
    throw error;
  }
  return result;
};

const getPartyListHandler = async (token) => axiosRequest({ url: '/party/list', token });

const createUserHandler = async (payload) => axiosRequest({ url: '/user', method: 'POST', payload });

const loginHandler = async (payload) => axiosRequest({ url: '/user/login', method: 'POST', payload });

const createPartyHandler = async (token, payload) => axiosRequest({ token, url: '/party', method: 'POST', payload });

const joinPartyHandler = async (token, partyId) => axiosRequest({ token, url: `/party/join/${partyId}`, method: 'PUT' });

const leavePartyHandler = async (token, partyId) => axiosRequest({ token, url: `/party/leave/${partyId}`, method: 'PUT' });

const deletePartyHandler = async (token, partyId) => axiosRequest({ token, url: `/party/${partyId}`, method: 'DELETE' });

export {
  getPartyListHandler,
  createUserHandler,
  loginHandler,
  createPartyHandler,
  joinPartyHandler,
  leavePartyHandler,
  deletePartyHandler,
};

export default {
  getPartyListHandler,
  createUserHandler,
  loginHandler,
  createPartyHandler,
  joinPartyHandler,
  leavePartyHandler,
  deletePartyHandler,
};
