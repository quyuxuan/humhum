import {AxiosRequestConfig,CancelTokenSource,AxiosResponse} from "axios"

export type ApiResponseParser<T> =(response:AxiosResponse)=> T;

export interface  RequestConfig <T=any> extends AxiosRequestConfig{
  bindCancelRef?:(ref:CancelTokenSource)=> void;
  responseParser?:ApiResponseParser<T>
}
export interface HttpResonse {
  
}
export interface ApiResponse<T =any> extends HttpResonse{
  code:number
  msg:string
  data:T
}