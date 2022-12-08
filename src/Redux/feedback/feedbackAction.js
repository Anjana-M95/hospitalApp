import { ALLREPLY, FEEDBACK } from "./feedbackType";

export const feedback = (data) => {
  return {
    type: FEEDBACK,
    payload: data,
  };
};
export const replyFB = (data) => {
  return {
    type: ALLREPLY,
    payload: data,
  };
};
