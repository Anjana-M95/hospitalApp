import { COURSEOPT } from "./CourseType";

const InitialState = {
 value: [],
};
const CoursesReducer=(state = InitialState, action) => {
  switch (action.type) {
    
    case COURSEOPT:
      return {
        ...state,
        value: action.payload,
      };

    default:
      return state;
  }
};
export default CoursesReducer