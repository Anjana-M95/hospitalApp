import { JOINTEAM } from "./CareerType";

export const jointeam=(data)=>{
    return{
    type:JOINTEAM,
    payload:data,
    }
}