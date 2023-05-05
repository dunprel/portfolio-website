import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='pb-16'>
      <div className='container'>
        <h2 className='text-headingColor font-[700] text-[2.5rem]'>
          Get in touch
        </h2>
        <p>
          Feel free to get in touch with me. <br />I am always open to
          discussing new projects, creative ideas or opportunities to be part of
          your visions.
        </p>
        <div className='md:flex justify-between items-center'>
          <div className='w-full md:w-1/2 h-[300px] sm:h-[450px]'>
            <iframe
              title='google-maps'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31716.495577818994!2d3.450416634807016!3d6.450240780927928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf452da3bd44b%3A0x47331fb41adc9d28!2sLekki%20Phase%201%20106104%2C%20Lekki%2C%20Lagos!5e0!3m2!1sen!2sng!4v1683179900797!5m2!1sen!2sng'
              className='border-0 w-full h-full'
              allowfullscreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>

          <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8'>
            <form className='w-full'>
              <div className='mb-5'>
                <input
                  type='text'
                  placeholder='Enter your name'
                  className='w-full p-3 focus:outline-none rounded-[5px]'
                />
              </div>
              <div className='mb-5'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='w-full p-3 focus:outline-none rounded-[5px]'
                />
              </div>
              <div className='mb-5'>
                <input
                  type='text'
                  placeholder='Subject'
                  className='w-full p-3 focus:outline-none rounded-[5px]'
                />
              </div>
              <div className='mb-5'>
                <input
                  type='text'
                  row={3}
                  placeholder='What is your Message'
                  className='w-full p-3 focus:outline-none rounded-[5px]'
                />
              </div>

              <button className='w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150'>
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
