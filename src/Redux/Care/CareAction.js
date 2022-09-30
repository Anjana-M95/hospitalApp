
import { GET_CARE } from "./CareType";

export const getcare=(data)=>{
    return{
        type:GET_CARE,
        payload:data,
    }
 
}