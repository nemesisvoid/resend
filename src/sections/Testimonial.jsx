import { arrowUp, ceoImage } from '../assets';

function Testimonial() {
  return (
    <section className='min-container'>
      <div className='flex flex-col items-center gap-6'>
        <div>
          <img
            src={arrowUp}
            alt=''
          />
        </div>

        <p className='text-3xl font-inter leading-relaxed text-left md:text-center max-w-[40ch] mt-8'>
          Resend is transforming email for developers. Simple interface, easy integrations, handy templates. What else could we ask for.
        </p>

        <div className='flex gap-5 mt-20'>
          <img
            src={ceoImage}
            alt=''
          />

          <p>
            <span className='font-inter text-2xl leading-relaxed'>Guillermo Rauch</span> <br />
            <span className='font-inter text-dark-gray text-2xl'>CEO at Vercel</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
