// api.js
import axios from 'axios';
import { getUrl } from './Global';

const axiosInstance = axios.create({
  baseURL:getUrl(),        //'http://127.0.0.1:8000/api/', // Base URL for your API
});

export const apiRequest = async (method, url, data = null, additionalHeaders = {}) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
      headers: {
        ...additionalHeaders, // Merge with any additional headers passed
      },
    });

    // Return the response data if successful
    return  response.data ;
  } catch (error) {
    // console.log(error)
    // Handle errors and return the error message
    return {code:500 ,success: false, message: 'An error occurred while making the request' };
    // if (error.response) {
    //   return { success: false, message: error.response.data.msg || 'An error occurred' };
    // } else {
    //   return { success: false, message: 'An error occurred while making the request' };
    // }
  }
};
