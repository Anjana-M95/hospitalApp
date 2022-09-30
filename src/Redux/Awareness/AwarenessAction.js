import { HEALTHAWARE } from "./AwarenessType";

export const healthaware = (data) => {
  return {
    type: HEALTHAWARE,
    payload: data,
  };
};