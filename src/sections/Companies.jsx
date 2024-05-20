import { companies } from '../constants';

function Companies() {
  return (
    <section className='min-container flex flex-col gap-20 items-center'>
      <p className='font-inter text-dark-gray text-center text-2xl  flex justify-center leading-10'>
        Companies of all sizes trust Resend <br /> to deliver the most important emails
      </p>

      <ul className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 items-center justify-items-center justify-center gap-20'>
        {companies.map((company, i) => (
          <li key={i}>
            <img
              src={company.src}
              alt=''
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Companies;
