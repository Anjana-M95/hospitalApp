import { FIRST_DATA,SECOND_DATA } from "./AcademyType";

const InitialState={
    value:[],
    leftvalue:[]
}
export const AcademyReducer=(state=InitialState,action)=>{
    switch(action.type){
        case FIRST_DATA:
            return{
                ...state,
            value:action.payload,
            };
            case SECOND_DATA:
                return{
                    ...state,
                    leftvalue:action.payload,
                };
                default:
                    return state;
            }

}