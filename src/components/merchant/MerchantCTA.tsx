import React from 'react';

const MerchantCTA = () => {
  return (
    <div className='bg-brand-100'>
      <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8'>
        <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          Ready to become a
          <br />
          Business Automation champion?
        </h2>
        <div className='mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0'>
          <a
            href='#'
            className='rounded-md bg-brand-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600'
          >
            Become a partner
          </a>
          <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
            Learn more <span aria-hidden='true'>→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MerchantCTA;
