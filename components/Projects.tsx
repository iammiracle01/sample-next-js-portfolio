"use client";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
const Projects = () => {
  return (
    <div className="py-15" id='projects'>
      <h1 className="heading">
       My{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-20 gap-y-6 mt-10">
        {projects.map(({ id, title, img, des, iconLists, link }) => (
          <PinContainer
            key={id}
            title={title}
            href={link}
            containerClassName="lg:min-h-[32rem] h-[25rem] sm:h-[30rem] flex items-center justify-center sm:w-[500px] w-[80vw]">
            <div className="relative flex items-center justify-center sm:w-[500px] w-[80vw] overflow-hidden h-[30vh] sm:h-[40vh] mb-10">
              <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]">
                <Image fill priority src="/bg.png" alt="bg-img" />
              </div>
              <Image
                priority
                fill
                src={img}
                alt={title}
                className="z-10 absolute bottom-0"
              />
            </div>

            <h1 className="font-bold lg:text-xl md:text-lg text-base line-clamp-1">
              {title}
            </h1>

            <p className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2">
              {des}
            </p>

            <div className="flex items-center justify-between mt-7 mb-3">
              <div className="flex items-center">
                {iconLists.map((icon, index) => (
                  <div
                    key={icon}
                    className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    style={{
                      transform: `translateX(-${5 * index + 2}px)`,
                    }}>
                    <Image
                      fill
                      src={icon}
                      alt={icon}
                      priority
                      className="p-2"
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-center items-center">
                <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                  Live Site
                </p>
                <FaLocationArrow className="ms-3" color="#CBACF9" />
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
};


export default Projects;
