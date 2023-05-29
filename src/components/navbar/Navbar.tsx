'use client';
import Image from 'next/image';
import Link from 'next/link';
import { HamburgerMenu } from '../hamburger-menu/HamburgerMenu';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { BsSearch } from 'react-icons/bs';

export interface NavbarProps {
  logo?: {
    image: string;
    alt: string;
    width: number;
  };
  links: {
    label: string;
    url: string;
  }[];
  hamburger?: {
    animation: string;
    color: string;
  };
  darkmode?: boolean;
  actionItem?: {
    type: 'icon';
  };
  format: 'Right links' | 'Left links' | 'Center links';
}

export default function Navbar({
  logo = { image: '/logo.webp', alt: 'Apps for Scratch Logo', width: 250 },
  links = [],
  hamburger = { animation: '', color: '' },
  darkmode = false,
  format = 'Right links',
}: NavbarProps) {
  const [active, setActive] = useState(false);
  const ref = useRef<null | HTMLDivElement>(null);

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
      <header
        className={clsx(
          'flex justify-center w-[100%] h-[60px] border-b-[1px] border-b-black-50 sticky top-0 z-[50] backdrop-blur-sm backdrop-saturate-180',
          {
            ['bg-nav-dark text-white-500 border-b-black-400']: darkmode,
            ['bg-nav-light text-black-500 border-b-black-50']: !darkmode,
          }
        )}
      >
        <nav
          className={clsx('flex items-center justify-center w-[100%] max-w-[1440px] px-4', {
            ['justify-between']: format == 'Center links',
            ['justify-start']: format !== 'Center links',
          })}
        >
          <div
            className={clsx('flex justify-start items-center hover:cursor-pointer', {
              ['w-[100%]']: format == 'Right links',
              ['w-[200px]']: format == 'Center links',
            })}
          >
            <Link href="/">
              <Image src={logo.image} alt={logo.alt} width={logo.width} height="100" />
            </Link>
          </div>

          <ul
            className={clsx('hidden lg:flex justify-start items-center space-x-8', {
              ['w-[100%]']: format == 'Left links',
            })}
          >
            {links.map((link, i) => {
              return (
                <li key={i} className="text-base">
                  <Link href={link.url}>{link.label}</Link>
                </li>
              );
            })}
          </ul>
          <span
            className={clsx('hidden lg:flex  ml-6', {
              ['w-[200px] justify-end']: format == 'Center links',
            })}
          >
            <BsSearch />
          </span>
          <div className="block lg:hidden w-[60px]">
            <HamburgerMenu
              animationType={hamburger.animation ? hamburger.animation : 'rotateX'}
              stroke={hamburger.color ? hamburger.color : '#000000'}
              active={active}
              setActive={setActive}
            />
          </div>
        </nav>
      </header>
      <div
        ref={ref}
        className={clsx(
          'lg:hidden w-[100%] h-full box-border bg-dialog-bg overflow-hidden text-black fixed top-[60px] flex justify-end',
          {
            ['opacity-100 z-[50]']: active,
            ['opacity-0 z-[-1]']: !active,
          }
        )}
        onClick={() => setActive(!active)}
      >
        <nav
          className="w-[100%] max-w-[320px] bg-white-500 text-black-500 py-8"
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col">
            {links.map((link, i) => {
              return (
                <li key={i} className="text-body-lg flex">
                  <Link href={link.url} className="w-[100%] flex-grow-1 px-6 py-3  h-[100%]">
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
