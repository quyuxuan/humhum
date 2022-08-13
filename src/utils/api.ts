import {
  AxiosError,AxiosInstance,AxiosResponse
} from "axios";
import { RequestConfig } from "./interface";

interface ApiRequestConfig extends RequestConfig{
  _startTime:number
}
 
export const step = (instance:AxiosInstance):AxiosInstance=>{
  instance.interceptors.request.use((config:ApiRequestConfig)=>{
    config._startTime = Date.now();
  });
  instance.interceptors.response.use((response:AxiosResponse)=>{
   return response
  },(error:AxiosError)=>{
    throw error;
  });
  return instance;
}
export default step;