import React from 'react'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

const Header = () => {
    return (
    <header className='mt-6 relative z-10 '>
    <div className='flex items-center justify-center'>
    <TextGenerateEffect className='text-center text-sm' words='Dynamic Portfolio with Next.js' />
    </div>
    </header>
  )
}

export default Header
