import { GET_CARE } from "./CareType";

const InitialState={
    value:[],
};

const CareReducer=(state = InitialState, action) => {
    switch (action.type) {
      
      case GET_CARE:
        return {
          ...state,
          value: action.payload,
        };
  
      default:
        return state;
    }
  };
  export default CareReducer