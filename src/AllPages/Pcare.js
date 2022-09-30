import React from "react";
import Slider from "../Components/Slider/Slider";
import Care from "../Components/Care/Care";
import Form from "../Components/Form/Form";
import Services from "../Components/Services/Services";
function Pcare() {
  return (
    <div className="Pcare">
      <Slider />
      <Care />
      <Form />
      <Services />
    </div>
  );
}

export default Pcare;
