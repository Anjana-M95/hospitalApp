import { FACILITIES } from "./FacilityType";


const InitialState = {
 value: [],
};
const FacilityReducer=(state = InitialState, action) => {
  switch (action.type) {
    
    case FACILITIES:
      return {
        ...state,
        value: action.payload,
      };

    default:
      return state;
  }
};
export default FacilityReducer