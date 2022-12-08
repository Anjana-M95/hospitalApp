import { ALLREPLY, FEEDBACK } from "./feedbackType";

const InitialState = {
  feedbackReply: [],
  feedbacks: [],
};

export const FeedbackReducer = (state = InitialState, action) => {
  switch (action.type) {
    case FEEDBACK:
      return {
        ...state,
        feedbacks: action.payload,
      };
    case ALLREPLY:
      return {
        ...state,
        feedbackReply: action.payload,
      };

    default:
      return state;
  }
};
