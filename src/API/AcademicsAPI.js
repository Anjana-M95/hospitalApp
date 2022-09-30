import axios from "axios"
import { secondData } from "../Redux/Academy/AcademyAction"

export default function AcademicsAPI(){
    return function(dispatch){
      axios.get('http://localhost:3000/programs').then((data)=>
      dispatch(secondData(data))
      ).catch(()=>{
        console.log("error");
      })
    }
  }