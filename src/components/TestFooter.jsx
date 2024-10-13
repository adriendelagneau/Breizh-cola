import React from 'react'
import Footer from './section/Footer'
import { Copyright } from 'lucide-react'

const TestFooter = () => {
  return (
    <div>
          <div 
        className='relative h-[150px] bg-secondColor text-mainColor dark:bg-secondDarkColor dark:text-mainDarkColor'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
        <div className='relative h-[calc(100vh+150px)] -top-[100vh]'>
            <div className='h-[150px] sticky top-[calc(100vh-150px)]'>
                <Content />
            </div>
        </div>
    </div>
    </div>
  )
}

export default TestFooter



const Content = () => {
    return (
      <div className='flex flex-col justify-between w-full h-full px-12 py-8 '>
          <Section2 />
      </div>
    )
  }
  

const Section2 = () => {
    return (
        <div className='flex items-center justify-between w-full'>
            <div className='flex items-center'>
                <Copyright />
                <div className='pl-2 text-2xl capitalize'>copyright 2024</div>
            </div>
            <Footer />
            <div className='text-5xl capitalize font-creamCake'>breizh cola</div>
        </div>
    )
}