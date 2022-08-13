import { Dispatch } from "react";
import { AnyAction } from "redux"
export interface ILoginProps {
  /**
   * 调用Redux
   */
  dispatch: Dispatch<AnyAction>;
}