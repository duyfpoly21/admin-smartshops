import axios from 'axios';
import qs from 'qs';


const ExternalClient = axios.create({
    baseURL: 'http://localhost:8081',
    headers: {
        'content-type': 'application/json'
    },
    paramsSerializer: (params) =>
        qs.stringify(params, {encodeValuesOnly: true}),
});


ExternalClient.interceptors.response.use(
  (response) => {
    console.log(response);
    if ( response.data) {
      return response.data;
    }
    return response;
  },
  async (error) => {
    return error;
  },
)


export default ExternalClient;
