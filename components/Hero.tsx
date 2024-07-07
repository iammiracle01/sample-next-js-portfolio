import { FaLocationArrow } from 'react-icons/fa'
import Image from 'next/image'
import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import myPicture from '../public/myPicture.jpg'
import Typewriter from './ui/TypeAnimation'
import { Button } from "./ui/MovingBorders";

const Hero = () => {
  return (
    <div className='py-15'>
          <div>
              <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white" />
              <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill="purple" />
              <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue"/>
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
            Dynamic Portfolio with Next.js
          </h2>
          <TextGenerateEffect className='text-center text-[32px] md:text-4xl lg:text-5xl m-3' words='Transforming Concepts into Seamless Experiences' />
          <div className='mb-3'>
          <Button
            borderRadius="50%"
            className='backdrop-blur-md bg-transparent'
            borderClassName='bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]'
            >
          <Image
            src={myPicture}
            alt="Miracle"
            className="rounded-full p-1"
            width={180}
            height={180}
            priority
          />
          </Button>
          </div>


          <p className='text-center md:tracking-wider mb-3 text-sm md:text-lg lg:text-xl'>
            I&apos;m Miracle, a <Typewriter /> based in Russia.
          </p>
          <a href="#about" title='Show my Work'>
            <MagicButton
              otherClasses='hover:bg-gradient-to-r from-indigo-500 to-purple-500'
              title="Show my work"
              icon={<FaLocationArrow />}
              position='right'

            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
