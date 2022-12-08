const InitialState = {
  value: [],
};

export const FeedbackReducer = (state = InitialState, action) => {
  switch (action.type) {
    case REPLY:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};
