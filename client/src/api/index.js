import httpMiddleware from './axiosUtils';
import Constants from '../constants';

const baseApi = Constants.proxyApiHost;

// 远端mock接口-登录
export const ApiMockLogin = params => {
  return httpMiddleware(`${baseApi}/login`, params, 'post');
};