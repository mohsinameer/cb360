'use client';
import { useHeroStore } from '@/store/heroStore';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

const HeroSection = () => {
  const { showHero, showOffersHero, toggleHeader, toggleOffersHero } =
    useHeroStore();
  // const router = useRouter();
  const pathname = usePathname();
  const { merchant_id } = useParams();

  useEffect(() => {
    const isHomepage = pathname === `/merchant/${merchant_id}`;
    // const isHomepage = pathname === '/';
    // const isHomepage = false;
    isHomepage ? toggleHeader(true) : toggleHeader(false);
    isHomepage ? toggleOffersHero(true) : toggleOffersHero(false);
  }, [pathname]);

  return showHero ? (
    <section className='relative overflow-hidden'>
      <div className='pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40'>
        <div className='relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8'>
          <div className='sm:max-w-lg'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
              Summer styles are finally here
            </h1>
            <p className='mt-4 text-xl text-gray-500'>
              This year, our new summer collection will shelter you from the
              harsh elements of a world that doesn&apos;t care if you live or
              die.
            </p>
          </div>
          <div>
            <div className='mt-10'>
              {/* Decorative image grid */}
              <div
                aria-hidden='true'
                className='pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl'
              >
                <div className='absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8'>
                  <div className='flex items-center space-x-6 lg:space-x-8'>
                    <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
                      <div className='h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100'>
                        <img
                          src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg'
                          alt=''
                          className='h-full w-full object-cover object-center'
                        />
                      </div>
                      <div className='h-64 w-44 overflow-hidden rounded-lg'>
                        <img
                          src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg'
                          alt=''
                          className='h-full w-full object-cover object-center'
                        />
                      </div>
                    </div>
                    <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
                      <div className='h-64 w-44 overflow-hidden rounded-lg'>
                        <img
                          src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg'
                          alt=''
                          className='h-full w-full object-cover object-center'
                        />
                      </div>
                      <div className='h-64 w-44 overflow-hidden rounded-lg'>
                        <img
                          src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg'
                          alt=''
                          className='h-full w-full object-cover object-center'
                        />
                      </div>
                      <div className='h-64 w-44 overflow-hidden rounded-lg'>
                        <img
                          src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg'
                          alt=''
                          className='h-full w-full object-cover object-center'
                        />
                      </div>
                    </div>
                    <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
                      <div className='h-64 w-44 overflow-hidden rounded-lg'>
                        <img
                          src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg'
                          alt=''
                          className='h-full w-full object-cover object-center'
                        />
                      </div>
                      <div className='h-64 w-44 overflow-hidden rounded-lg'>
                        <img
                          src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg'
                          alt=''
                          className='h-full w-full object-cover object-center'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href='/estore-products'
                className='inline-block rounded-md border border-transparent bg-brand-500 px-8 py-3 text-center font-medium text-white duration-300 hover:bg-brand-600'
              >
                Shop Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
};

export default HeroSection;
