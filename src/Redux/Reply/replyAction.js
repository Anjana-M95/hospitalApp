import { REPLY } from "./replyType";

export const replyComments = (data) => {
  return {
    type: REPLY,
    payload: data,
  };
};
