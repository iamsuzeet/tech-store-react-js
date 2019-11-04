import React from "react";

import Hero from "./../components/reusable/Hero";
import Contact from "./../components/ContactPage/Contact";

import contactImg from "../images/contactBcg.jpeg";

export default function ContactPage() {
  return (
    <>
      <Hero img={contactImg} />
      <Contact />
    </>
  );
}
