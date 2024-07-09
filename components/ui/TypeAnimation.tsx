"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Typewriter = () => {
  return (
    <TypeAnimation
      preRenderFirstString={true}
      sequence={[
        500,
        "UI/UX Designer",
        1500,
        "Web Developer",
        500,
      ]}
      wrapper="strong"
      speed={40}
      cursor={true}
      repeat={Infinity}
      style={{
        color: 'red',
      }}
    />
  );
};

export default Typewriter;
