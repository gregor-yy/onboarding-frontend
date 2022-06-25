import request from './request';

const getDocDetails = value => {
  return request({
    endPoint: 'help',
    params: value,
    method: 'get-token',
  });
};

export default getDocDetails;
