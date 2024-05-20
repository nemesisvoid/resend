import { developImage, developImage2 } from '../assets';

function Experience() {
  return (
    <section className='container'>
      <h2 className='heading'>
        First-class <br /> developer experience
      </h2>

      <p className='text-dark-gray text-3xl leading-relaxed mb-24'>
        We are a team of engineers who love building tools for other engineers. <br /> Our goal is to create the email platform we've always wished we
        had — one that just works.
      </p>

      <div className='flex flex-wrap max-lg:gap-20 lg:justify-between max-lg:justify-center'>
        <div>
          <img
            src={developImage}
            alt=''
          />
        </div>

        <div>
          <img
            src={developImage2}
            alt=''
          />
        </div>
      </div>
    </section>
  );
}
export default Experience;
