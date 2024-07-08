import { FaLocationArrow } from 'react-icons/fa'
import { FiDownload } from "react-icons/fi";
import Image from 'next/image'
import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/Spotlight'
import myPicture from '../public/myPicture.jpg'
import Typewriter from './ui/TypeAnimation'
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

      <div className='flex justify-center relative my-10 z-10'>
        <div className='max-w-7xl grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10'>
          <div className='order-2 md:order-1 flex flex-col items-center md:items-start'>
            <p className='mb-3 text-[32px] md:text-4xl font-bold font-mono lg:text-5xl leading-snug tracking-wide'>
              Hi, I&apos;m <span className='text-purple'>Miracle</span>
            </p>
            <p className='md:tracking-wide mb-5 font-semibold text-lg md:text-xl lg:text-2xl'>
              a <Typewriter /> based in Russia.
            </p>
            <p className='text-white/80 leading-relaxed text-center font-normal md:text-left tracking-wider mb-3 text-sm md:text-base'>
              My professional experience encompasses a wide range of subjects, with a strong emphasis on front-end development. I predominantly utilize tools such as React, Next.js, Remix, and TypeScript. I also have expertise in other front-end technologies including Vue, Nuxt, and Svelte, as well as proficiency in CSS, Sass, and Tailwind CSS for styling. My experience includes modern state management libraries like Redux, Zustand, and Recoil.
            </p>
            <div className='flex max-[375px]:flex-col flex-row items-center gap-4'>
              <a href="#about" title='About me' className='self-center md:self-start'>
                <MagicButton
                  otherClasses='hover:bg-gradient-to-r from-indigo-500 to-purple-500'
                  title="About me"
                  icon={<FaLocationArrow />}
                  position='right'
                />
              </a>
              <a href="/resume.pdf" download title='Download Resume'>
                <MagicButton
                  otherClasses='hover:bg-gradient-to-r from-green-500 to-blue-500'
                  title="Download Resume"
                  icon={<FiDownload />}
                  position='right'
                />
              </a>
            </div>
          </div>
          <div className='flex flex-col items-center order-1 md:order-2'>
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
                  objectFit='cover'
                  quality={100}
                  priority
                />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
