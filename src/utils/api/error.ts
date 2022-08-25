import {AxiosRequestConfig,AxiosResponse} from "axios";
import {get} from "lodash";

export default class ApiError extends Error {
  private _code: number;
  private _message: string;
  private _response?: AxiosResponse;
  private _error?: Error;
  private _config: AxiosRequestConfig;

  static isApiError(error: any): error is ApiError {
    return error instanceof ApiError;
  }
  constructor(msg:string ,code = -1,config:AxiosRequestConfig,response?:AxiosResponse,error?:Error) {
    super(get(error, "message", ""));
    this._error = error;
    this._code = code;
    this._message = msg;
    this._response = response;
    this._config = config;
  }
  get code(): number {
    return this._code;
  }
  get msg(): string {
    return this._message;
  }
  get response(): AxiosResponse {
    return this._response;
  }
  get error(): Error {
    return this._error;
  }
  get config(): AxiosRequestConfig {
    return this._config;
  }
  get traceId():string| undefined{
    return get(this.response, "headers.trace-id");
  }

}