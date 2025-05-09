import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';
import { TbArrowUpRight, TbBrandMeta, TbRobotFace } from 'react-icons/tb';
import {
  BackgroundGradient,
  SVGBackgroundPattern,
} from '../about/AboutHeroSection';
import Link from 'next/link';

const HomeHeroSection = () => {
  return (
    <div className='relative isolate'>
      <SVGBackgroundPattern />
      <BackgroundGradient />
      {/* <svg
        className='absolute inset-0 -z-10 h-full w-full stroke-brand-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
        aria-hidden='true'
      >
        <defs>
          <pattern
            id='83fd4e5a-9d52-42fc-97b6-718e5d7ee527'
            width={200}
            height={200}
            x='50%'
            y={-1}
            patternUnits='userSpaceOnUse'
          >
            <path d='M100 200V.5M.5 .5H200' fill='none' />
          </pattern>
        </defs>
        <svg x='50%' y={-1} className='overflow-visible fill-brand-50'>
          <path
            d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z'
            strokeWidth={0}
          />
        </svg>
        <rect
          width='100%'
          height='100%'
          strokeWidth={0}
          fill='url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)'
        />
      </svg> */}
      <div className='mx-auto max-w-7xl px-6 py-4 pb-8 sm:py-8 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-10'>
        <div className='mx-auto max-w-2xl lg:mx-0 lg:flex-auto'>
          <Image
            src={'/assets/brand/meta-partner.svg'}
            alt='Meta Business Partner'
            width={200}
            height={50}
            className='h-20 object-contain object-left lg:h-28'
          />
          <div className='flex'>
            <div className='relative flex items-center gap-x-4 rounded-full bg-brand-50/50 px-4 py-1 text-xs leading-6 text-gray-600 ring-1 ring-gray-900/10 backdrop-blur-md hover:ring-gray-900/20 lg:text-sm'>
              <span className='inline-flex items-center justify-center gap-2 font-medium text-gallery-700'>
                Unlock the power of bots
                <TbRobotFace className='h-5 w-5' />
              </span>
              <span className='h-4 w-px bg-gray-900/10' aria-hidden='true' />
              <a href='#' className='flex items-center gap-x-1'>
                <span className='absolute inset-0' aria-hidden='true' />
                Start now
                <TbArrowUpRight
                  className='-mr-2 h-5 w-5 text-gray-500'
                  aria-hidden='true'
                />
              </a>
            </div>
          </div>
          <h1 className='mt-10 max-w-lg text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
            Revolutionize Your{' '}
            <span className='font-serif font-semibold italic text-brand-500'>
              Growth:
            </span>{' '}
            Our powerful tools ensures reduced OpEx and doubles your{' '}
            <span className='text-emerald-500'>business success</span>
          </h1>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            We’re passionate about building the technology to give you the best
            tools to operate your business.
          </p>
          <div className='mt-10 flex items-center gap-x-6'>
            <Link
              href='/contact-us'
              className='rounded-full bg-brand-500 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600'
            >
              Get started
            </Link>
            <Link
              href='/about'
              className='text-sm font-semibold leading-6 text-gray-900'
            >
              Learn more <span aria-hidden='true'>→</span>
            </Link>
          </div>
        </div>
        <div className='mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow'>
          {/* <video
              // className='mx-auto w-[22.875rem] max-w-full drop-shadow-xl'
              className='pointer-events-none absolute inset-0 w-fit max-w-full'
              controls={false}
              autoPlay
              loop
              muted
            >
              <source
                src='/assets/mockups/screen-video-01.mp4'
                type='video/mp4'
              />
            </video> */}
          <PhoneWrapperSVG>
            <Image
              width={400}
              height={1000}
              quality={100}
              priority
              placeholder='blur'
              blurDataURL='/assets/animations/screen-video-02.gif'
              alt='app-screen'
              src={'/assets/animations/screen-video-02.gif'}
            />
          </PhoneWrapperSVG>
        </div>
      </div>
    </div>
  );
};

export const PhoneWrapperSVG = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <svg
      viewBox='0 0 366 729'
      role='img'
      className='relative mx-auto w-[22.875rem] max-w-full overflow-hidden drop-shadow-xl'
    >
      <title>App screenshot</title>
      <defs>
        <clipPath id='2ade4387-9c63-4fc4-b754-10e687a0d332'>
          <rect width={316} height={684} rx={36} />
        </clipPath>
      </defs>
      <path
        fill='#191919'
        d='M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z'
      />
      <path
        fill='#3d3d3d'
        d='M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z'
      />
      <foreignObject
        width={316}
        height={684}
        transform='translate(24 24)'
        clipPath='url(#2ade4387-9c63-4fc4-b754-10e687a0d332)'
      >
        {children}
      </foreignObject>
    </svg>
  );
};

export default HomeHeroSection;
