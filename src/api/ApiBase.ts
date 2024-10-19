import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create();

export enum RestType {
  POST = 'POST',
  GET = 'GET',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
  PUT = 'PUT',
}

type RequestOptions = {
  method?: RestType;
  body?: any;
};

class ApiBase {
  static timeout: number = 10000;

  call = async (url: string, options: RequestOptions = {}) => {
    const newUrl = process.env.BASE_URL + url;

    const newMethod = options.method || RestType.GET;
    const newTimeout = ApiBase.timeout;
    const newHeaders = {
      Authorization: process.env.GITHUB_TOKEN,
    };
    const config: AxiosRequestConfig = {
      url: newUrl,
      method: newMethod,
      data: options?.body,
      timeout: newTimeout,
      headers: newHeaders,
    };

    return axiosInstance(config);
  };
}

export default ApiBase;
