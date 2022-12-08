import { combineReducers } from "redux";
import NavbarReducer from "./Navbar/NavbarReducer";
import CareerReducer from "./Career/CareerReducer";
import ServicesReducer from "./Services/ServicesReducer";
import CareReducer from "./Care/CareReducer";
import FacilityReducer from "./Facility/FacilityReducer";
import AwarenessReducer from "./Awareness/AwarenessReducer";
import CoursesReducer from "./Courses/CoursesReducer";
import { AcademyReducer } from "./Academy/AcademyReducer";
import { FeedbackReducer } from "./feedback/feedbackReducer";

export const RootReducer = combineReducers({
  navigationList: NavbarReducer,
  careerList: CareerReducer,
  serviceList: ServicesReducer,
  careList: CareReducer,
  facilityList: FacilityReducer,
  awarenessList: AwarenessReducer,
  courseList: CoursesReducer,
  academyList: AcademyReducer,
  feedbackList: FeedbackReducer,
});
