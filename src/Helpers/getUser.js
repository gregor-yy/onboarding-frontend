import request from './request';

const getUser = () => {
  return request({
    endPoint: 'me',
    method: 'get-token',
  });
};

export default getUser;
