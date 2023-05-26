'use client';
import Image from 'next/image';
import Link from 'next/link';
import { HamburgerMenu } from '../hamburger-menu/HamburgerMenu';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export interface NavbarProps {
  logo?: string;
  links: {
    label: string;
    url: string;
  }[];
  hamburger?: {
    animation: string;
    color: string;
  };
}

export default function Navbar({ logo, links, hamburger }: NavbarProps) {
  const [active, setActive] = useState(false);
  const ref = useRef<null | HTMLDivElement>(null);

  if (!links) {
    links = [];
  }
  if (!hamburger) {
    hamburger = {
      animation: '',
      color: '',
    };
  }

  useEffect(() => {
    const dropdown = ref.current;

    if (active) {
      disableBodyScroll(dropdown as HTMLElement, { reserveScrollBarGap: false });
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [active]);

  return (
    <>
      <header className="flex justify-center w-[100%] bg-white text-black h-[60px] border-b-[1px] sticky top-0 z-[50] backdrop-blur-sm backdrop-saturate-180">
        <nav className="flex justify-between items-center w-[100%] max-w-[1440px] px-4 ">
          <div className="block lg:hidden w-[60px]">
            <HamburgerMenu
              animationType={hamburger.animation ? hamburger.animation : 'rotateX'}
              stroke={hamburger.color ? hamburger.color : '#000000'}
              active={active}
              setActive={setActive}
            />
          </div>
          <div className="lg:w-[100px] flex justify-start items-center hover:cursor-pointer">
            <Link href="/">
              <Image src={logo ?? '/vercel.svg'} alt="Logo" width="60" height="60" />
            </Link>
          </div>
          <ul className="hidden lg:flex justify-around items-center space-x-8">
            {links.map((link, i) => {
              return (
                <li
                  key={i}
                  className="text-body-lg text-white-600 font-regular hover:text-white-50"
                >
                  <Link href={link.url}>{link.label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <div
        ref={ref}
        className={clsx(
          'lg:hidden w-[100%] h-full box-border overflow-hidden bg-white text-black fixed top-[55px] opacity-0 transition-opacity duration-500 ease-in-out py-8',
          {
            ['opacity-100']: active,
            ['z-50']: active,
            ['z-[-1]']: !active,
          }
        )}
      >
        <ul className="flex flex-col">
          {links.map((link, i) => {
            return (
              <li
                key={i}
                className="text-body-lg flex text-white-600 font-light hover:text-white-50"
                onClick={() => setActive(false)}
              >
                <Link href={link.url} className="w-[100%] flex-grow-1 px-6 py-3  h-[100%]">
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
