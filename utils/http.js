import { Config } from "../config";
// import { Token } from "./token";

// const token = uni.getStorageSync('token')
const _request = (url, options) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: Config.baseUrl + url,
      method: options.method,
      data: options.data,    // 小程序端:JSON.stringify(options.data)
      // header: {
      //   'Content-Type': 'application/json; charset=UTF-8',
      //   'Authorization':token
      // },
      success:(req)=> { 
        resolve(req.data);
      },
      fail:(error)=> {
        reject(error.data);
      }

    });
  });
};

const get = (url, options = {}) => {
  return _request(url, {
    method: 'GET',
    data: options
  });
};

const post = (url, options) => {
  return _request(url, {
    method: 'POST',
    data: options
  });
};

const put = (url, options) => {
  return _request(url, {
    method: 'PUT',
    data: options
  });
}; 


// 不能声明DELETE（关键字）
const remove = (url, options) => {
  return _request(url, {
    method: 'DELETE',
    data: options
  });
};

export { _request,get, post, put, remove };