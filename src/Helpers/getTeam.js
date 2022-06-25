import request from './request';

const getTeam = focus => {
  return request({
    endPoint: 'team',
    params: `?focus=${focus}`,
    method: 'get-token',
  });
};

export default getTeam;
