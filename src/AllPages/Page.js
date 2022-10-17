import React from "react";
import { useAuth } from "./auth";
import { useHistory } from "react-router-dom";
import Slider from "../Components/Slider/Slider";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";

function Page() {
  const auth = useAuth();
  const history = useHistory();

  return (
    <div className="Page">
      <Slider />
      <About />
      <Services />
    </div>
  );
}
export default Page;
