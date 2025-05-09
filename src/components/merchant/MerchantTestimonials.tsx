import React from 'react';
const testimonials = [
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Leslie Alexander',
      handle: 'lesliealexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Excepteur consectetur deserunt id incididunt veniam mollit officia sint qui aute duis sit cillum. Reprehenderit fugiat amet aliqua in commodo minim sunt laborum.',
    author: {
      name: 'Lindsay Walton',
      handle: 'indsaywalton',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: '“Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis.”',
    author: {
      name: 'Whitney Francis',
      handle: 'whitneyfrancis',
      imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Anim sit consequat culpa commodo eu do nisi commodo ut aute aliqua. Laborum esse duis tempor consectetur officia mollit fugiat. Exercitation qui elit minim minim quis fugiat ex.',
    author: {
      name: 'Michael Foster',
      handle: 'michaelfoster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Distinctio facere aliquam est qui atque sint molestias ad. Fuga consequuntur asperiores voluptatum ipsum.',
    author: {
      name: 'Courtney Henry',
      handle: 'courtneyhenry',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More testimonials...
];

const MerchantTestimonials = () => {
  return (
    <div className='bg-white py-12 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-xl text-center'>
          <h2 className='text-sm font-semibold uppercase leading-8 tracking-widest text-brand-600'>
            Testimonials
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            We have worked with thousands of amazing people
          </p>
        </div>
        <div className='mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none'>
          <div className='-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3'>
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.handle}
                className='pt-8 sm:inline-block sm:w-full sm:px-4'
              >
                <figure className='rounded-2xl bg-gray-50 p-8 text-sm leading-6'>
                  <blockquote className='text-gray-900'>
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className='mt-6 flex items-center gap-x-4'>
                    <img
                      className='h-10 w-10 rounded-full bg-gray-50'
                      src={testimonial.author.imageUrl}
                      alt=''
                    />
                    <div>
                      <div className='font-semibold text-gray-900'>
                        {testimonial.author.name}
                      </div>
                      <div className='text-gray-600'>{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantTestimonials;
