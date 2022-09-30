import { JOINTEAM } from "./CareerType";

const InitialState = {
  value: [],
};

const CareerReducer = (state = InitialState, action) => {
  switch (action.type) {
    case JOINTEAM:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};
export default CareerReducer;
