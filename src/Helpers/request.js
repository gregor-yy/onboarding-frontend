import axios from 'axios';

const url = `${process.env.REACT_APP_URL_API}`;

export const mediaLink = process.env.REACT_APP_URL_API.replace(
  'api/v1',
  'media/'
);

// const refreshToken = async payload => {
//   try {
//     const response = await request({
//       endPoint: 'token/refresh',
//       method: 'post',
//       data: {
//         refresh: localStorage.getItem('refresh'),
//       },
//     });
//     localStorage.setItem('refresh', response.data.refresh);
//     localStorage.setItem('access', response.data.access);
//     return request(payload);
//   } catch (error) {
//     localStorage.removeItem('refresh');
//     localStorage.removeItem('access');
//     console.log(error);
//   }
// };

const request = async payload => {
  let params = '';
  let data = '';
  if (payload.params) {
    params = `${payload.params}`;
  }
  if (payload.data) {
    data = payload.data;
  }
  switch (payload.method) {
    case 'get':
      return await axios.get(`${url}/${payload.endPoint}/${params}`);
    case 'post':
      return await axios.post(`${url}/${payload.endPoint}/${params}`, data);
    case 'get-token':
      if (localStorage.getItem('access')) {
        return await axios.get(`${url}/${payload.endPoint}/${params}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access')}`,
          },
        });
      } else {
        return await axios.get(`${url}/${payload.endPoint}/${params}`);
      }
    case 'post-token':
      if (localStorage.getItem('access')) {
        return await axios.post(`${url}/${payload.endPoint}/${params}`, data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access')}`,
          },
        });
      } else {
        return await axios.post(`${url}/${payload.endPoint}/${params}`, data);
      }
    case 'patch-token':
      if (localStorage.getItem('access')) {
        return await axios.patch(`${url}/${payload.endPoint}/${params}`, data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access')}`,
          },
        });
      } else {
        return await axios.patch(`${url}/${payload.endPoint}/${params}`, data);
      }
    default:
      console.log('Неизвестный запрос');
  }
};

export default request;
