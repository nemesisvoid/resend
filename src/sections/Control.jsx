import { controlImage, controlTab } from '../assets';
import { tabs } from '../constants';

function Control() {
  return (
    <section className='container'>
      <header className='flex flex-col items-center'>
        <div className='mb-12'>
          <img
            src={controlImage}
            alt=''
          />
        </div>
        <h2 className='heading'>Everything in your control</h2>
        <p className='text-3xl text-dark-gray font-inter w-full lg:max-w-[50%] leading-relaxed text-left md:text-center'>
          All the features you need to manage your email sending, troubleshoot with detailed logs, and protect your domain reputation – without the
          friction.
        </p>
      </header>

      <ul className='flex lg:justify-between flex-col md:flex-row gap-8 mt-24 mb-16'>
        {tabs.map(tab => (
          <li key={tab.src}>
            <img
              src={tab.src}
              alt=''
            />
          </li>
        ))}
      </ul>

      <img
        src={controlTab}
        alt=''
        className='w-full mb-80'
      />

      <div className='flex flex-col items-center'>
        <h2 className='heading'>Beyond expectations</h2>
        <p className='text-3xl text-dark-gray md:max-w-[85%] lg:max-w-[50%]'>
          Resend is driving remarkable developer experiences that enable success stories, empower businesses, and fuel growth across industries and
          individuals.
        </p>
      </div>
    </section>
  );
}

export default Control;
