import axios from "axios"
import { firstData } from "../Redux/Academy/AcademyAction"


export default function AcademyAPI() {
  return function (dispatch){
    axios.get('http://localhost:3000/academics').then((data)=>
    dispatch (firstData(data))
   ).catch(()=>{
    console.log("error");
   })

} 
}
