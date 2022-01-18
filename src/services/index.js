import axios from "axios";

const service = axios.create({
  baseURL: "https://restcountries.com/v2/",
  headers: { authorization: "bearer token" },
//   timeout: 1000,
  //...
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent

    // if (store.getters.token) {
    //   // let each request carry token
    //   // ['X-Token'] is a custom headers key
    //   // please modify it according to the actual situation
    //   config.headers['X-Token'] = getToken()
    // }
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

export default service