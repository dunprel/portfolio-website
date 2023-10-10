import React from 'react'
import FrontendImg from '../../assets/images/front-end.png'

import html5 from '../../assets/images/New/html5.svg'
import css from '../../assets/images/New/css.svg'
import javascript from '../../assets/images/New/Javascript.svg'
import reactjs from '../../assets/images/New/reactjs.svg'
import nodejs from '../../assets/images/New/node.svg'
import tailwind from '../../assets/images/New/tailwind css.png'
import sanity from '../../assets/images/New/sanity.png'
import typescript from '../../assets/images/New/typescript-original.svg'
import TypeEffect from 'react-typewriter-effect'
import Typewriter from 'typewriter-effect'

const Services = () => {
  return (
    <section id='services'>
      <div className='container lg:pt-5'>
        <div className='text-center'>
          <h2 className='flex items-center justify-center gap-2 text-headingColor font-[600] text-[2.4rem]'>
            My{' '}
            <span className='md:text-4xl text-primaryColor font-[600] text-[2.4rem]'>
              <Typewriter
                options={{
                  strings: ['Stacks.', 'Specilization.', 'Services.'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h2>

          <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7 pb-[1rem]'>
            Below are some of the technologies I use in my development.
          </p>

          <section className='mb-0'>
            <div className='flex items-center justify-center flex-wrap gap-[1rem] mb-[0] '>
              <img className='rounded' src={html5} alt='' />
              <img className='rounded' src={css} alt='' />
              <img className='rounded' src={javascript} alt='' />

              <img className='rounded' src={reactjs} alt='' />
              <img className='rounded' src={nodejs} alt='' />
            </div>

            <div className='flex items-center justify-center flex-wrap gap-[1rem] mt-[-0rem] '>
              <img className='rounded ' src={sanity} alt='' />
              <img className='rounded ' src='image.png' alt='' />
              <img className='rounded' src={tailwind} alt='' />
            </div>
          </section>
        </div>

        <div className='flex flex-col justify-center sm:py-12'>
          <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
            <div className='relative text-gray-700 antialiased text-sm font-semibold'>
              {/* Vertical Line running through the middle */}
              <div className='hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2'></div>

              {/* Start Left Card */}
              <div className='mt-6 sm:mt-0 sm:mb-12'>
                <div className='flex items-center flex-col sm:flex-row'>
                  <div className='flex justify-start w-full mx-auto items-center'>
                    <div className='w-full sm:w-1/2 sm:pr-8'>
                      <div
                        data-aos='fade-right'
                        data-aos-duration='1200'
                        className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'
                      >
                        <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>
                          Frontend Development
                        </h3>

                        <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                          I can convert any psd or Figma file into mobile or tab
                          responsive web application using Javacripts frameworks
                          like ReactJs, NextJs and also Pure HTML, CSS.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-0 flex items-center justify-center'>
                    <figure>
                      <img src={FrontendImg} alt='' />
                    </figure>
                  </div>
                </div>
              </div>
              {/* End of Left Card */}

              {/* Start Right Card */}
              <div className='mt-6 sm:mt-0 sm:mb-12'>
                <div className='flex items-center flex-col sm:flex-row'>
                  <div className='flex justify-end w-full mx-auto items-center'>
                    <div className='w-full sm:w-1/2 sm:pl-8'>
                      <div
                        data-aos='fade-left'
                        data-aos-delay='50'
                        data-aos-duration='1300'
                        className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'
                      >
                        <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>
                          Backend Development
                        </h3>

                        <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                          I have worked on some backend projects using NodeJs,
                          ExpressJs, MongoDb, Sanity.io, Firebase. I am
                          currently learning Python and Django for more
                          effective backend solutions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-0 flex items-center justify-center'>
                    <figure>
                      <img src={FrontendImg} alt='' />
                    </figure>
                  </div>
                </div>
              </div>
              {/* End of Left Card */}

              {/* Start Left Card */}
              <div className='mt-6 sm:mt-0 sm:mb-12'>
                <div className='flex items-center flex-col sm:flex-row'>
                  <div className='flex justify-start w-full mx-auto items-center'>
                    <div className='w-full sm:w-1/2 sm:pr-8'>
                      <div
                        data-aos='fade-right'
                        data-aos-delay='100'
                        data-aos-duration='1400'
                        className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'
                      >
                        <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>
                          Wordpress Website Design
                        </h3>

                        <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                          I have worked on several Wordpress Website Projects
                          using Elementor and Visual Composer toolkits for
                          dynamic and reponsives Web solutions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-0 flex items-center justify-center'>
                    <figure>
                      <img src={FrontendImg} alt='' />
                    </figure>
                  </div>
                </div>
              </div>
              {/* End of Left Card */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
