"use client";
import { TypeAnimation } from "react-type-animation";

const Typewriter = () => {
  return (
    <TypeAnimation
      preRenderFirstString={true}
      sequence={[
        500,
        "Web Developer",
        1500,
        "UI/UX Designer",
        1500,
        "Freelancer",
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
