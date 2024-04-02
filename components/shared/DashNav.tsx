import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';

const Logo = () => (
  <Link href='/'>
    <div className='flex items-center justify-center text-white font-extrabold leading-snug text-xl'>
      <Image
        src='/logo.webp'
        alt='Cypro Logo'
        height={65}
        width={65}
        className='rounded-full mr-2'
      />
      <div className='text leading-none'>
        <h1 className='bg-clip-text text-transparent font-[900] bg-gradient-to-r from-[#FF1D60] to-[#C71869]'>
          CYPRO
        </h1>
        <span className=''>STUDIO</span>
      </div>
    </div>
  </Link>
);

const SearchBar = () => (
    <div className='relative hidden md:block'>
      <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
        <svg
          className='w-4 h-4 text-gray-500 dark:text-gray-400'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 20 20'>
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'></path>
        </svg>
      </div>
      <input
        type='text'
        id='search-navbar'
        className='block w-full p-2 ps-10 text-sm text-gray-900 border border-none rounded-lg bg-zinc-700 focus:border-transparent'
        placeholder='Search...'
      />
    </div>
  );
  

const DashNav = () => (
  <nav className='flex items-center justify-between mx-auto p-4 px-14'>
    <div className='flex items-center justify-center gap-8'>
    <Logo />
    <SearchBar />
    </div>
    <div className="">
    <UserButton afterSignOutUrl='/'/>    
    </div>
  </nav>
);

export default DashNav;
