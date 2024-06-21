import React from 'react';
import { Separator } from './ui/separator';
import Image from 'next/image';

type Props = {};

const Teams = (props: Props) => {
  return (
    <div>
      <div className='flex justify-center px-4 md:px-16 py-10'>
        <div>
          <p className='font-bold text-4xl'>Teams</p>
          <Separator className='h-[3px]' />
        </div>
      </div>
      <div className='mb-10 flex flex-col md:flex-row justify-center items-center px-4 md:px-16 md:space-x-20 space-y-6 md:space-y-0'>
        <div className='flex flex-col items-center'>
          <Image
            src={'/team-1.jpeg'}
            width={300}
            height={300}
            alt='team-1'
            className='rounded-md'
            style={{ width: 300, height: 300, objectFit: 'cover' }}
          />
          <p className='font-semibold mt-4 text-center'>Naufal Aufa</p>
          <p className='text-center'>Frontend Developer at Cretivox</p>
          <p className='text-gray-500 text-center'>1 year of experience</p>
        </div>
        <div className='flex flex-col items-center'>
          <Image
            src={'/team-2.jpg'}
            width={300}
            height={300}
            alt='team-2'
            className='rounded-md'
            style={{ width: 300, height: 300, objectFit: 'cover' }}
          />
          <p className='font-semibold mt-4 text-center'>Ahmad Nawfal</p>
          <p className='text-center'>Fullstack Developer at Zova Technology</p>
          <p className='text-gray-500 text-center'>1+ years of experience</p>
        </div>
      </div>
    </div>
  );
};

export default Teams;
