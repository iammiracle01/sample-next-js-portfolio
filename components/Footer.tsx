import React from "react";
import { contactDetails, socialMedia } from "@/data";
import Image from "next/image";
import Contact from "./ContactForm";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mb-5 pb-10" id="contact">
      <div className="flex flex-col items-center justify-center gap-10 px-5">
        <div className="flex flex-col lg:flex-row lg:justify-center items-center lg:items-start justify-between w-full my-10 gap-10">
          {/* Left div */}
          <div className="flex flex-col lg:items-start gap-5 w-full lg:w-1/2">
            <h1 className="text-left font-bold lg:text-5xl sm:text-3xl">
              Ready to take <span className="text-purple">your</span> digital
              presence to the next level?
            </h1>
            <p className="text-left font-mono mb-4 lg:text-2xl sm:text-xl text-white-200">
              Reach out to me today and let&apos;s discuss how I can help you
              achieve your goals.
            </p>
            <div className="flex flex-col items-start gap-4">
              {contactDetails.map(({ icon, link, text }) => (
                <a
                  key={text}
                  href={link}
                  className="flex items-center gap-3 text-white-300 font-normal font-mono text-lg"
                >
                  <Image src={icon} alt={text} width={24} height={24} />
                  {text}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3 mt-5">
              {socialMedia.map((profile) => (
                <a
                  key={profile.id}
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={profile.des}
                  className="cursor-pointer w-10 h-10 relative flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                >
                  <Image
                    src={profile.img}
                    alt={profile.des}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </div>
          {/* Right Div */}
          <div className="flex flex-col rounded-lg items-center justify-center w-full lg:w-1/2">
            <Contact />
          </div>
        </div>
      </div>
      <div className="w-full border border-gray-600 mt-10"></div>
      <div className="flex mt-5 justify-center items-center w-full px-5">
        <p className="md:text-base text-sm md:font-normal font-light">
          © {currentYear} Miracle. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
