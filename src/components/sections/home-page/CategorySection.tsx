import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type CategorySectionType = {
  categories: { id: number; name: string }[];
  activeCategory: { id: number; name: string };
  onCategoryChange: (category: { id: number; name: string }) => void;
};

const CategorySection = () => {
  return (
    <section aria-labelledby='category-heading' className='bg-gray-50'>
      <div className='mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8'>
        <div className='sm:flex sm:items-baseline sm:justify-between'>
          <h2
            id='category-heading'
            className='text-2xl font-bold tracking-tight text-gray-900'
          >
            Shop by Category
          </h2>
          <a
            href='#'
            className='hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block'
          >
            Browse all categories
            <span aria-hidden='true'> &rarr;</span>
          </a>
        </div>

        <div className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8'>
          <div className='aspect-h-1 aspect-w-2 sm:aspect-h-1 sm:aspect-w-1 group overflow-hidden rounded-lg sm:row-span-2'>
            <img
              src='https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg'
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className='object-cover object-center group-hover:opacity-75'
            />
            <div
              aria-hidden='true'
              className='bg-gradient-to-b from-transparent to-black opacity-50'
            />
            <div className='flex items-end p-6'>
              <div>
                <h3 className='font-semibold text-white'>
                  <a href='#'>
                    <span className='absolute inset-0' />
                    New Arrivals
                  </a>
                </h3>
                <p aria-hidden='true' className='mt-1 text-sm text-white'>
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className='aspect-h-1 aspect-w-2 sm:aspect-none group overflow-hidden rounded-lg sm:relative sm:h-full'>
            <img
              src='https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg'
              alt='Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.'
              className='object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full'
            />
            <div
              aria-hidden='true'
              className='bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0'
            />
            <div className='flex items-end p-6 sm:absolute sm:inset-0'>
              <div>
                <h3 className='font-semibold text-white'>
                  <a href='#'>
                    <span className='absolute inset-0' />
                    Accessories
                  </a>
                </h3>
                <p aria-hidden='true' className='mt-1 text-sm text-white'>
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className='aspect-h-1 aspect-w-2 sm:aspect-none group overflow-hidden rounded-lg sm:relative sm:h-full'>
            <img
              src='https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg'
              alt='Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk.'
              className='object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full'
            />
            <div
              aria-hidden='true'
              className='bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0'
            />
            <div className='flex items-end p-6 sm:absolute sm:inset-0'>
              <div>
                <h3 className='font-semibold text-white'>
                  <a href='#'>
                    <span className='absolute inset-0' />
                    Workspace
                  </a>
                </h3>
                <p aria-hidden='true' className='mt-1 text-sm text-white'>
                  Shop now
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-6 sm:hidden'>
          <Link
            href='#!'
            className='block text-sm font-semibold text-indigo-600 hover:text-indigo-500'
          >
            Browse all categories
            <span aria-hidden='true'> &rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
