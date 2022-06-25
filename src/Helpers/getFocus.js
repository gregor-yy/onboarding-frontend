import request from './request';

const getFocus = () => {
  return request({
    endPoint: 'focus',
    method: 'get-token',
  });
};

export default getFocus;
