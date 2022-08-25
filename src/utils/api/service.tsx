import Axios, { AxiosResponse, AxiosError } from "axios";
import { defaultTo, get as _get } from "lodash";
import setpApiIntercerceptor from "./api"
import ApiError from "./error";
import { ApiResponseParser, RequestConfig,ApiResponse } from "./interface";
const requestInstance = Axios.create({
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
const converAxiosErrorToApiError = (error: AxiosError): ApiError => {
  let code = -1;
  let message = error.message;
  const response = error.response;
  if (response) {
    code = defaultTo(_get(response, "data.code"), 0 - response.status);
    message = defaultTo(_get(response, "data.message"), message);
  }
  return new ApiError(message, code, error.config, error.response, error);
};
const handleRequestError = (e: unknown, config?: RequestConfig): ApiError => {
  if (Axios.isAxiosError(e)) {
    return converAxiosErrorToApiError(e);
  }
  if (e instanceof ApiError) {
    return e;
  }
  return new ApiError(
    String(e),
    -1,
    config,
    undefined,
    e instanceof Error ? e : new Error(String(e))
  );
};

const prepareRequest = (config?:RequestConfig)=>{
  if(config){
    if(config.bindCancelRef && !config.cancelToken){
      const source = Axios.CancelToken.source();
      config.cancelToken = source.token;
      config.bindCancelRef(source);
    }
  }
}

export const handleHttpResponse = (response:AxiosResponse<AxiosResponse>,parser?:ApiResponseParser<any>):any=>{
  const data:ApiResponse<any> = response.data;
  if(parser){
    return parser(response);
  }
  if(data.code=== 0){
    return response.data
  }else {
    throw new ApiError(data.msg||'接口请求失败',data.code,response.config,response);
  }

}
export const post = async <T =any> (url:string,data?:object,config?:RequestConfig): Promise<T> => {
  try {
    prepareRequest(config);
    const response:AxiosResponse<AxiosResponse<T>> = await requestInstance.post(url, data, config);
    return handleHttpResponse(response,config?.responseParser);
  }catch (er:unknown){
    throw handleRequestError(er);
  }
}
export const get = async <T =any> (
  url:string,
  query?:object,
  config?:Omit<RequestConfig<T>,"params">): Promise<T> => {
  try {
    prepareRequest(config);
    const response:AxiosResponse<AxiosResponse<T>> = await requestInstance.get(
      url, 
      Object.assign(config||{},{params:query}));
      return handleHttpResponse(response,config?.responseParser);
  }catch (er:unknown){
    throw handleRequestError(er);
  }
}

setpApiIntercerceptor(requestInstance);

export default requestInstance;
