import API from '../config/axios';
import handleError from './handleError';

const FetchAutoModedata = async () => {
  try {
    const response = await API.get('/show');
    return { data: response.data, statusCode: 201, errorMessage: '' };
  } catch (err) {
    return handleError(err);
  }
};

export default FetchAutoModedata;
