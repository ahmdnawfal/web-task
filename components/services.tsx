'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Chrono } from 'react-chrono';
import { Separator } from './ui/separator';
import { dataServices } from '@/data/dataServices';

type Props = {};

const Services = (props: Props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <div className='flex justify-center px-4 md:px-16 py-10'>
        <div>
          <p className='font-bold text-4xl'>Services</p>
          <Separator className='h-[3px]' />
        </div>
      </div>
      <div className='min-h-screen flex justify-center items-center flex-col md:flex-row px-4 md:px-16 space-x-0 md:space-x-4 space-y-6 md:space-y-0'>
        <div className='md:w-[50%] md:flex md:justify-center'>
          <Image
            src={'/services.jpg'}
            width={500}
            height={400}
            alt='image services'
            className='rounded-sm shadow-lg'
          />
        </div>
        <div className='md:w-[50%]'>
          <Chrono
            items={dataServices}
            mode='VERTICAL'
            theme={{
              titleColor: 'black',
              cardTitleColor: 'black',
              titleColorActive: 'black',
              primary: 'black',
            }}
          >
            <div>
              <span>
                We provide inspiring and functional website designs at
                affordable costs to help your business grow and develop in the
                competitive digital world. From initial concept to launch, we
                ensure every detail is designed to reflect your company's unique
                values and vision.
              </span>
            </div>
            <div>
              <ul className='space-y-4'>
                <li>
                  We use modern technology to build web applications that are
                  responsive, secure, and tailored to your specific needs.
                </li>
                <li>
                  <span className='font-semibold'>Frontend: </span>
                  HTML5, CSS3, Tailwind CSS, Bootstrap, JavaScript, PHP,
                  Laravel, React.js, Vue.js and Next.js
                </li>
                <li>
                  <span className='font-semibold'>Backend: </span>
                  PHP, Laravel, Node.js and Express.js
                </li>
                <li>
                  <span className='font-semibold'>Database: </span>
                  MySQL, MongoDB and PostgreSQL
                </li>
              </ul>
            </div>
            <div>
              <span>
                Provides comprehensive maintenance and support services to
                ensure your website or application operates properly. We perform
                routine maintenance and provide responsive technical support,
                ready to help maintain performance and get the most out of your
                digital platform.
              </span>
            </div>
            <div>
              <span>
                We provide professional assistance in completing your academic
                tasks affordably and promptly. From essays to reports and
                presentations, our expert team is ready to help you achieve
                academic success.
              </span>
            </div>
          </Chrono>
        </div>
      </div>
    </div>
  );
};

export default Services;
