import React from "react";
import { useAuth } from "./auth";
import { Link, useHistory } from "react-router-dom";

import Slider from "../Components/Slider/Slider";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";

function Page() {
  const auth = useAuth();
  const history = useHistory();

  const handleLogout = () => {
    auth.logout();
    history.push("/");
  };
  return (
    <div className="Page">
      <Link onClick={handleLogout}>LogOut</Link>

      <Slider />
      <About />
      <Services />
    </div>
  );
}
export default Page;
