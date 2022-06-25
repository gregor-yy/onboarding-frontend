import request from './request';

const getBlocks = value => {
  return request({
    endPoint: 'block',
    params: `?status=${value}`,
    method: 'get-token',
  });
};

export default getBlocks;
