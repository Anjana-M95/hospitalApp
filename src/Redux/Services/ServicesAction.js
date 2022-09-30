
import { SERVICECARDS } from "./ServicesType";

export const servicecards=(data)=>{
    return{
        type:SERVICECARDS,
        payload:data,
    };
};