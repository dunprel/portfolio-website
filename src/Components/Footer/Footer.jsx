import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer id='footer' className='bg-[#12141e] '>
      {/* Footer Top */}
      <div className='container'>
        <div className='sm:flex items-center justify-between md:gap-8'>
          <div className='w-full sm:w-1/2'>
            <h2 className='text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]'>
              Do you want to make Beautiful Products?
            </h2>
            <a href='#contact'>
              <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                <i class='ri-mail-line'></i>Hire me
              </button>
            </a>
          </div>

          <div className='w-full sm:w-1/2'>
            <p className='text-gray-300 leading-7 mt-4 sm:mt-0 pt-5'>
              I am a self-motivated and results-oriented individual with a knack
              for developing user-friendly and industry-standard software. I
              have experience developing, maintaining, testing, and debugging
              software applications.
            </p>
            <div className='flex items-center gap-4 flex-wrap md:gap-8 mt-10'>
              <span className='text-gray-300 font-[600] text-[15px]'>
                Follow Me:
              </span>

              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a
                  href='https://github.com/dunprel'
                  target='_blank'
                  className='text-gray-300 font-[500] text-[18px]'
                >
                  <i class='ri-github-line'></i>
                </a>
              </span>

              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a
                  href='https://twitter.com/dunprel'
                  target='_blank'
                  className='text-gray-300 font-[500] text-[18px]'
                >
                  <i class='ri-twitter-fill'></i>
                </a>
              </span>

              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a
                  href='https://www.linkedin.com/in/precious-dunkwu-a368869b/'
                  target='_blank'
                  className='text-gray-300 font-[500] text-[18px]'
                >
                  <i class='ri-linkedin-box-fill'></i>
                </a>
              </span>

              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a
                  href='https://drive.google.com/file/d/1ZcVeVQH7CYCOVi_PVIgsqEGr17PiEoNY/view?usp=share_link'
                  target='_blank'
                  className='text-gray-300 font-[500] text-[18px]'
                >
                  <i class='ri-contacts-book-line'></i>
                </a>
              </span>
            </div>
          </div>
        </div>

        <div>
          <ul className='flex items-center justify-center gap-10 mt-10'>
            <li>
              <a className='text-gray-400 font-[600]' href='#about'>
                About
              </a>
            </li>
            <li>
              <a className='text-gray-400 font-[600]' href='#services'>
                Services
              </a>
            </li>
            <li>
              <a className='text-gray-400 font-[600]' href='#projects'>
                Projects
              </a>
            </li>
            <li>
              <a className='text-gray-400 font-[600]' href='#contact'>
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* End of Footer Top */}

      {/* Footer Button */}
      <div className='bg-[#1b1e29] py-3 mt-14'>
        <div className='container'>
          <div className='flex items-center justify-center sm:justify-between'>
            <div className='hidden sm:block'>
              <div className='flex items-center gap-[10px]'>
                <span className='w-[35px] h-[35px rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center'>
                  D
                </span>
                <div className='leading-[20px]'>
                  <h2 className='text-gray-200 font-[500] text-[18px]'>
                    Dunprel
                  </h2>
                  <p className='text-gray-400 text-[14px] font-[500]'>
                    Portfolio
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className='text-gray-400 text-[14px]'>
                Developed by Dunprel. Copyright - All right reserved {year}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* End of Footer Button */}
    </footer>
  )
}

export default Footer
