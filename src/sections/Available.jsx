import { arrowRight, footerImage, lineImg } from '../assets';

function Available() {
  return (
    <>
      <section className='container'>
        <div className='flex items-center flex-col gap-6'>
          <h2 className='heading '>
            Email reimagined. <br />
            Available today.
          </h2>

          <div className='flex gap-8 mb-32 flex-wrap'>
            <button className='btn-white'>
              Get Started
              <img
                src={arrowRight}
                alt=''
              />
            </button>
            <button className='btn'>
              Contact Us
              <img
                src={arrowRight}
                alt=''
              />
            </button>
          </div>
        </div>

        <img
          src={footerImage}
          alt=''
          className='w-full after:content-["-"] relative after:absolute after:w-full after:z-10 after:bg-red-500'
        />

        <img
          src={lineImg}
          alt=''
          className='w-[100%] hidden'
        />
      </section>
    </>
  );
}

export default Available;
