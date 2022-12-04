import Image from 'next/image';
import React from 'react';

export const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className='py-16 relative cursor-pointer'>
      <div className='relative min-w-[300px] h-96'>
        <Image
          src={img}
          layout='fill'
          objectFit='cover'
          className='rounded-2xl'
        />
      </div>
      <div className='absolute top-32 left-12'>
        <h3 className='text-4xl mb-3 w-64'>{title}</h3>
        <p className=''>{description}</p>
        <button className='text-sm bg-gray-900 text-white px-4 py-2 rounded-lg mt-5'>
          {buttonText}
        </button>
      </div>
    </section>
  );
};
