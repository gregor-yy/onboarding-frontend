import request from './request';

const getCardDetails = value => {
  return request({
    endPoint: 'card',
    params: value,
    method: 'get-token',
  });
};

export default getCardDetails;
