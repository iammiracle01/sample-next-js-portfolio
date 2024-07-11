import { IoMdInformationCircleOutline } from "react-icons/io";
import { FiDownload } from "react-icons/fi";
import Image from 'next/image';
import MagicButton from './ui/MagicButton';
import { Spotlight } from './ui/Spotlight';
import myPicture from '../public/myPicture.jpg';
import Typewriter from './ui/TypeAnimation';
import { Button } from "./ui/MovingBorders";

const Hero = () => {
  return (
    <div className='py-16'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white" />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill="purple" />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className='flex items-center justify-center relative my-10 z-10'>
        <div className='max-w-7xl grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10'>
          <div className='order-2 lg:order-1 flex flex-col items-center lg:items-start'>
          <p className='mb-3 text-[32px] md:text-4xl font-bold lg:text-5xl leading-snug tracking-wide'>
              Hi, I&apos;m <span className='text-purple'>Miracle</span>
            </p>
            <p className='font-mono antialiased mb-4 font-semibold text-xl md:text-2xl lg:text-3xl'> <Typewriter />
            </p>
            <p className='text-white/80 leading-relaxed font-normal font-serif text-center lg:text-left tracking-wider mb-3 text-base'>
            Welcome to my portfolio! As a versatile professional in the digital realm, I wear multiple hats with skills as a Web Developer, UI/UX Designer, and Freelancer. I have a passion for crafting engaging user experiences and building robust, innovative web solutions, I thrive on bringing creativity and functionality together. Explore my work and discover how I blend technical prowess with a keen eye for design to create impactful digital experiences.
            </p>
            <div className='flex flex-wrap lg:items-start items-center mt-5 justify-center gap-4'>
                <a href="#about" title='About me'>
                  <MagicButton
                    title="About me"
                    icon={<IoMdInformationCircleOutline />}
                  position='right'
                  otherClasses="transform active:scale-105 transition-colors transition-transform duration-150"
                  />
                </a>
                <a href="/resume.pdf" download title='Download Resume'>
                  <MagicButton
                    title="View Resume"
                    icon={<FiDownload />}
                  position='right'
                  otherClasses="transform active:scale-105 transition-colors transition-transform duration-150"
                  />
                </a>
              </div>

          </div>
          <div className='flex flex-col items-center order-1 lg:order-2'>
            <Button
              borderRadius="50%"
              className='backdrop-blur-md bg-transparent'
              borderClassName='bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]'
            >
              <div className='w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 relative'>
                <Image
                  src={myPicture}
                  alt="Miracle"
                  className="rounded-full p-1.5"
                  fill
                  quality={100}
                  priority
                />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
