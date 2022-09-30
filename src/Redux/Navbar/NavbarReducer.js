import { NAVOPTIONS } from "./NavbarType";

const InitialState = {
 navbaroption: [],
};
const NavbarReducer=(state = InitialState, action) => {
  switch (action.type) {
    
    case NAVOPTIONS:
      return {
        ...state,
        navbaroption: action.payload,
      };

    default:
      return state;
  }
};
export default NavbarReducer
