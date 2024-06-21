'use client';

import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';
import { GrLanguage } from 'react-icons/gr';
import { IoLanguage } from 'react-icons/io5';
import { setCookie, deleteCookie } from 'cookies-next';

type Props = {
  language: string;
};

const NavLanguage = ({ language }: Props) => {
  const handleLanguage = async (name: string) => {
    if (language) {
      await deleteCookie('language');
    }
    await setCookie('language', name);
    window.location.reload();
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='h-0 font-semibold text-base p-0'>
            <span className='flex items-center space-x-2'>
              <span>
                <GrLanguage />
              </span>
              <span>{language === 'en' ? 'English' : 'Indonesia'}</span>
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div>
              <NavigationMenuLink>
                <div
                  className={`flex items-center space-x-2 hover:bg-gray-100 px-4 py-2 ${
                    language === 'en' && 'bg-gray-100'
                  }`}
                  onClick={() => handleLanguage('en')}
                >
                  <span>
                    <IoLanguage className='text-xl' />
                  </span>
                  <span>English</span>
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink>
                <div
                  className={`flex items-center space-x-2 hover:bg-gray-100 px-4 py-2 ${
                    language === 'id' && 'bg-gray-100'
                  }`}
                  onClick={() => handleLanguage('id')}
                >
                  <span>
                    <IoLanguage className='text-xl' />
                  </span>
                  <span>Indonesia</span>
                </div>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavLanguage;
