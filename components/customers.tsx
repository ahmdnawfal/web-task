import React from 'react';
import { Separator } from './ui/separator';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { dataCustomers } from '@/data/dataCustomers';
import { TypeDataCustomers } from '@/lib/type';

type Props = {};

const Customers = (props: Props) => {
  return (
    <div>
      <div className='flex justify-center px-4 md:px-16 py-10'>
        <div>
          <p className='font-bold text-4xl'>Customers</p>
          <Separator className='h-[3px]' />
        </div>
      </div>
      <div className='flex justify-center px-4 md:px-16 mb-10'>
        <p className='text-2xl text-gray-500 text-center'>
          What my customers say
        </p>
      </div>
      <div className='px-4 md:px-16'>
        <div className='flex justify-center'>
          <Carousel className='w-full max-w-sm sm:max-w-xl md:max-w-6xl'>
            <CarouselContent>
              {dataCustomers.map((value: TypeDataCustomers, index: number) => (
                <CarouselItem key={index} className='sm:basis-1/2 md:basis-1/3'>
                  <div className='p-1'>
                    <Card className='shadow-lg'>
                      <CardContent className='p-6 space-y-4'>
                        <p>{value.title}</p>
                        <div className='flex items-center space-x-4'>
                          <Avatar>
                            <AvatarImage src={value.image} />
                            <AvatarFallback>AV</AvatarFallback>
                          </Avatar>
                          <span>{value.name}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Customers;
