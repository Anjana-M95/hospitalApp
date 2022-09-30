
import { FACILITIES } from "./FacilityType";

export const facilities = (data) => {
  return {
    type: FACILITIES,
    payload: data,
  };
};