"use client"

import React from 'react'
import AnchorLink from './AnchorLinks';

const sections = [
  { id: 'year-2003', year: 2003 },
  { id: 'year-2007', year: 2007 },
  { id: 'year-2011', year: 2011 },
  { id: 'year-2018', year: 2018 },
  { id: 'year-2022', year: 2022 },
  { id: 'year-2025', year: 2025 },  // New Section
  { id: 'year-2028', year: 2028 },  // New Section
  { id: 'year-2031', year: 2031 },  // New Section
  { id: 'year-2035', year: 2035 },  // New Section
];

  
const CFooter = () => {
  return (
    <div className='fixed bottom-0 left-0 z-20 w-full p-6 bg-secondColor text-mainColor'>
     <ul className='flex gap-12 text-xl'>
        {sections.map((y,i) => (
            <li key={i} className='text-4xl cursor-pointer text-mainColor font-poppins'>
              <AnchorLink destination={y.id} name={y.year}/>
            </li>
        ))}
     </ul>
    </div>
  )
}

export default CFooter
