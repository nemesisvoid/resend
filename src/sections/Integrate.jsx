import { integrateImage, integrateImage2 } from '../assets';
import { logos } from '../constants';

function Integrate() {
  return (
    <section className='flex flex-col gap-10 items-center bg-black'>
      <div>
        <img
          src={integrateImage}
          alt=''
          className='bg-black'
        />
      </div>

      <p className='text-3xl font-inter text-dark-gray leading-[1.5]'>
        A simple, elegant interface so you can start sending emails in minutes. It fits <br /> right into your code with SDKs for your favorite
        programming languages.
      </p>

      <ul className='flex gap-14 flex-wrap max-sm:justify-center'>
        {logos.map(logo => (
          <li
            key={logo.name}
            className='flex flex-col gap-6 flex-wrap items-center first:text-white'>
            <div className='border flex items-center justify-center border-dark-gray  rounded-3xl px-8 py-6'>
              <img
                src={logo.src}
                alt=''
                width={40}
                height={40}
              />
            </div>

            <p className='text-2xl first:text-white text-dark-gray'>{logo.name}</p>
          </li>
        ))}
      </ul>

      <div className='mt-14'>
        <img
          src={integrateImage2}
          alt=''
        />
      </div>
    </section>
  );
}

export default Integrate;
