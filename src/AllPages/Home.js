import React from "react";
import Slider from "../Components/Slider/Slider";
import Explore from "../Components/Explore/Explore";
import Form from "../Components/Form/Form";
import Services from "../Components/Services/Services";

function Home() {
  return (
    <div className="Home">
      <Slider />
      <Explore />
      <Form />
      <Services />
    </div>
  );
}

export default Home;
