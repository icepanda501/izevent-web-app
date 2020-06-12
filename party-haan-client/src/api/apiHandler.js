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

export {
  getPartyListHandler,
  createUserHandler,
};

export default {
  getPartyListHandler,
  createUserHandler,
};
