import request from './request';

const getDocs = value => {
  return request({
    endPoint: `help`,
    params: `?search=${value}`,
    method: 'get-token',
  });
};

export default getDocs;
