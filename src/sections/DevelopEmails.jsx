import { arrowRight, reactImage, reactImage2 } from '../assets';

function DevelopEmails() {
  return (
    <section className='container pt-32'>
      <div className='flex justify-center mb-10'>
        <img
          src={reactImage}
          alt=''
        />
      </div>

      <div className='flex flex-col max-md:items-start items-center mb-20'>
        <h2 className='heading'>Develop emails using React</h2>

        <p className='font-inter text-3xl text-dark-gray leading-relaxed max-md:leading-normal'>
          Create beautiful templates without having to deal with {`<table>`} layouts and HTML.
        </p>
        <p className='font-inter text-3xl text-dark-gray max-md:leading-normal'>Powered by react-email, our open source component library</p>

        <div className=' flex items-center mt-14 gap-6 flex-wrap max-md:gap-10'>
          <button className='btn-white'>
            Get Started <img src={arrowRight} />
          </button>

          <button className='btn'>
            Check the docs
            <img
              src={arrowRight}
              alt=''
            />
          </button>
        </div>
      </div>

      <div className='flex justify-center'>
        <img
          src={reactImage2}
          alt=''
        />
      </div>
    </section>
  );
}

export default DevelopEmails;
