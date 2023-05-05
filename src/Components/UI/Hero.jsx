import React from 'react'
import heroImg from '../../assets/images/male.jpg'
import CountUp from 'react-countup'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <section className='pt-0' id='about'>
      <div className='container pt-14'>
        <div className=' flex items-center justify-between sm:flex-col md:flex-row'>
          {/* Start of Here left content  */}
          <div className='w-full md:basis-1/2'>
            <h5
              data-aos='fade-right'
              data-aos-duration='1500'
              className='text-headingColor font-[600] text-[16px]'
            >
              Hello Welcome
            </h5>
            <h1
              data-aos='fade-up'
              data-aos-duration='1500'
              className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px} mt-5'
            >
              I'm Dunkwu Precious
            </h1>
            <Typed
              className='md:text-4xl text-primaryColor sm:text-4xl text-xl font-[400] '
              strings={['Software Engineer.', 'FrontEnd Developer.']}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
            <p
              data-aos='fade-left'
              data-aos-duration='1800'
              className='flex gap-2 text-headingColor mt-6 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10'
            >
              <span>
                <i class='ri-apps-2-line'></i>
              </span>
              I am a Full-stack Software Engineer specializing in Front-end
              Development. I am a self-motivated and results-oriented individual
              with a knack for developing user-friendly and industry-standard
              software. I have experience developing, maintaining, testing, and
              debugging software applications.
            </p>

            <div
              data-aos='fade-up'
              data-aos-duration='1800'
              data-aos-delay='200'
              className='flex items-center gap-6 mt-7'
            >
              <a href='#contact'>
                <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                  <i class='ri-mail-line'></i> Hire me
                </button>
              </a>
              <a
                href='#projects'
                className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor'
              >
                See My Projects
              </a>
            </div>

            <div
              data-aos='fade-down'
              data-aos-duration='1800'
              className='flex items-center gap-3 mt-10'
            >
              <span className='text-smallTextColor text-[15px] font-[600]'>
                Follow me:
              </span>
              <span>
                <a
                  href='https://github.com/dunprel'
                  target='_blank'
                  className='text-smallTextColor text-[18px] font-[600]'
                >
                  <i class='ri-github-fill'></i>
                </a>
              </span>

              <span>
                <a
                  href='https://www.linkedin.com/in/precious-dunkwu-a368869b/'
                  target='_blank'
                  className='text-smallTextColor text-[18px] font-[600]'
                >
                  <i class='ri-linkedin-box-fill'></i>
                </a>
              </span>

              <span>
                <a
                  href='https://twitter.com/dunprel'
                  target='_blank'
                  className='text-smallTextColor text-[18px] font-[600]'
                >
                  <i class='ri-twitter-fill'></i>
                </a>
              </span>

              <span>
                <a
                  href='#linkedin'
                  className='text-smallTextColor text-[18px] font-[600]'
                >
                  <i class='ri-contacts-book-line'></i>
                </a>
              </span>
            </div>
          </div>
          {/* End of Hero left content  */}

          {/* Start of Hero Image  */}
          <div className='basis-1/3 mt-10 sm:mt-0'>
            <figure className='flex items-center justify-center'>
              <img src={heroImg} alt='' />
            </figure>
          </div>
          {/* End of Hero Image  */}

          {/* Start of Hero content right  */}
          <div className='md:basis-1/3 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end'>
            <div className='mb-5'>
              <h2 className='text-headingColor font-[700] text-[32px]'>
                <CountUp start={0} end={100} duration={2} suffix='%' />
              </h2>
              <h4 className='text-headingColor font-[600] text-[18px]'>
                Succes Rate
              </h4>
            </div>

            <div className='mb-5'>
              <h2 className='text-headingColor font-[700] text-[32px]'>
                <CountUp start={0} end={20} duration={2} suffix='+' />
              </h2>
              <h4 className='text-headingColor font-[600] text-[18px]'>
                Happy Clients
              </h4>
            </div>
            <div className='mb-5'>
              <h2 className='text-headingColor font-[700] text-[32px]'>
                <CountUp start={0} end={3} duration={2} suffix='+' />
              </h2>
              <h4 className='text-headingColor font-[600] text-[18px]'>
                Years of Experience
              </h4>
            </div>

            <div className='mb-5'>
              <h2 className='text-headingColor font-[700] text-[32px]'>
                <CountUp start={0} end={45} duration={2} suffix='+' />
              </h2>
              <h4 className='text-headingColor font-[600] text-[18px]'>
                Completed Project and Tasks
              </h4>
            </div>
          </div>
          {/* End of Hero content right  */}
        </div>
      </div>
    </section>
  )
}

export default Hero
