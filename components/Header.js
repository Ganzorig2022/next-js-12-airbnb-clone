import Image from 'next/image';
import React from 'react';
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
  UserIcon,
} from '@heroicons/react/24/solid';

const Header = () => {
  return (
    // md ==> 768px breakppoint
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10'>
      {/* LEFT */}
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>
      {/* MIDDLE SEARCH*/}
      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input
          type='text'
          placeholder='Start your search'
          className='flex-grow pl-5 bg-transparent outline-none'
        />
        {/* 768px - search icon alga bolno. */}
        <MagnifyingGlassIcon className='hidden h-8 md:inline-flex bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
      </div>

      {/* RIGHT */}
      <div className='flex items-center justify-end space-x-4 text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        <GlobeAltIcon className='h-6' />
        <div className='flex items-center space-x-2 border-2 rounded-full p-2'>
          <Bars3Icon className='h-6' />
          <UserCircleIcon className='h-6' />
        </div>
      </div>
    </header>
  );
};

export default Header;

// hidden md:inline
