import { SERVICECARDS } from "./ServicesType";

export const servicecards = (data) => {
  console.log("serviceaction");
  return {
    type: SERVICECARDS,
    payload: data,
  };
};
