import { COURSEOPT } from "./CourseType";


export const courseopt = (data) => {
  return {
    type: COURSEOPT,
    payload: data,
  };
};