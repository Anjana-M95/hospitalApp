import { navoptions } from "../Redux/Navbar/NavbarAction";
import axios from "axios";

function NavbarAPI() {
  return function(dispatch) {
    axios
      .get("http://localhost:3000/navList")
      .then((data) => {
        dispatch(navoptions(data));
      })
      .catch(() => {
        console.log("error");
      });
  };
}
export default NavbarAPI;
