import { arrowRight, heroImage, heroImage2 } from '../assets';

function Hero() {
  return (
    <section className='min-container'>
      <div className='flex flex-col gap-36 mb-24 max-lg:gap-14 items-center lg:flex-row'>
        <div className='flex flex-col lg:gap-4'>
          <p className='text-white text-2xl py-2 flex items-center gap-2 w-fit relative bg-[#0B0E14] rounded-full gradient px-4 mb-6 lg:mb-10'>
            Resend raises $3M seed round
            <img
              src={arrowRight}
              alt=''
            />
          </p>
          <h1 className='heading'>
            Email for <br />
            developers
          </h1>
          <p className='font-inter text-dark-gray max-w-[45ch] text-3xl leading-relaxed'>
            The best API to reach humans instead of spam folders. Build, test, and deliver transactional emails at scale.
          </p>

          <div className='flex flex-wrap items-center gap-10 mt-14'>
            <button className='btn-white'>
              Get Started
              <img
                src={arrowRight}
                alt=''
              />
            </button>

            <button className='btn'>
              Documentation
              <img
                src={arrowRight}
                alt=''
              />
            </button>
          </div>
        </div>

        <div className='flex-1 w-full relative bg-heroBg bg-cover '>
          <img
            src={heroImage}
            alt='hero image'
          />
        </div>
      </div>
      <p className='flex items-center gap-1 justify-center text-dark-gray font-medium text-xl'>
        Backed by
        <img
          src={heroImage2}
          alt=''
        />
        combinator
      </p>
    </section>
  );
}

export default Hero;
