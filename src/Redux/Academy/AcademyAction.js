import { FIRST_DATA,SECOND_DATA } from "./AcademyType";

export const firstData=(data)=>{
    return{
        type:FIRST_DATA,
        payload:data,
    }
}

export const secondData=(data)=>{
    return{
        type:SECOND_DATA,
        payload:data,
    }
}

