import React from "react";
import Hero from "./../components/reusable/Hero";
import Info from "./../components/AboutPage/Info";

import aboutBcg from "../images/aboutBcg.jpeg";

export default function AboutPage() {
  return (
    <>
      <Hero img={aboutBcg} />
      <Info />
    </>
  );
}
