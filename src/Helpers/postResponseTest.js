import request from './request';

const postResponseTest = data => {
  return request({
    endPoint: 'response-test',
    data: data,
    method: 'post-token',
  });
};

export default postResponseTest;
