import React from "react";
import { InfiniteMovingCards } from "./ui/infiniteMovingCards";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-16" id="testimonials">
      <h1 className="heading">
        Testimonials from <span className="text-purple"> satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center my-12">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
              <img src={img} alt={img} className='md:w-10 w-5' />
              <img src={nameImg} alt={name} className='md:w-24 w-20' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
