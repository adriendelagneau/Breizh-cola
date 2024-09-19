import React from 'react';
import { useCurrentIndexStore } from '@/store/zuStore'; 
import AnchorLink from './AnchorLinks';
import { sections } from '@/utils/data';

const CFooter = () => {
  const { currentIndex, setCurrentIndex } = useCurrentIndexStore(state => ({
    currentIndex: state.currentIndex,
    setCurrentIndex: state.setCurrentIndex,
  }));

  return (
    <div className='fixed bottom-0 left-0 z-20 w-full p-6 bg-mainColor dark:bg-mainDarkColor dark:text-secondDarkColor text-secondColor'>
      <ul className='flex gap-10 text-xl'>
        {sections.map((y, i) => (
          <li
            key={i}
            className={`text-4xl transition cursor-pointer font-poppins ${i === currentIndex ? 'underline' : ''} hover:scale-110`}
            onClick={() => setCurrentIndex(i)}
          >
            <AnchorLink destination={y.id} name={y.year}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CFooter;

