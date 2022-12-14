import { SERVICECARDS } from "./ServicesType";

const InitialState = {
  value: [],
};
const ServicesReducer = (state = InitialState, action) => {
  console.log("reducer");
  switch (action.type) {
    case SERVICECARDS:
      return {
        ...state,
        value: action.payload,
      };

    default:
      return state;
  }
};
export default ServicesReducer;
