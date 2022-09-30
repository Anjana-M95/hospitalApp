import { HEALTHAWARE } from "./AwarenessType";


const InitialState={
    value:[],
};

function AwarenessReducer(state=InitialState,action){
    switch(action.type){
    case HEALTHAWARE:
    return{
        ...state,
        value:action.payload,
    };
    default:
        return state;
    }
};export default AwarenessReducer;

