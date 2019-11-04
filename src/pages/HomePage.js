import React from "react";
import Hero from "./../components/reusable/Hero";
import { Link } from "react-router-dom";
import Services from "./../components/Homepage/Services";
import Featured from "./../components/Homepage/Featured";

export default function HomePage() {
  return (
    <>
      <Hero title="awesome gadgets" max="true">
        <Link className="main-link" to="/products" style={{ margin: "2rem" }}>
          our products
        </Link>
      </Hero>
      <Services />
      <Featured />
    </>
  );
}
