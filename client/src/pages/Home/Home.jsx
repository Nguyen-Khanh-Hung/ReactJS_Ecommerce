import React from "react";
import Slider from "../../components/Slider/Slider";
import FeatureProducts from "../../components/FeatureProducts/FeatureProducts";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home">
      <Slider></Slider>
      <FeatureProducts type="feature"></FeatureProducts>
      <FeatureProducts type="trending"></FeatureProducts>
    </div>
  );
};

export default Home;
