function Footer() {
  return (
    <section className='container'>
      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-14 '>
        <div className=''>
          <address className='text-dark-gray text-2xl font-inter'>
            2261 Market Street #5039 <br /> San Francisco, CA 94114
          </address>
          <div className='flex flex-wrap items-center'></div>
        </div>

        <div>
          <h3 className='text-3xl text-[#FCFDFF] mb-10 font-inter'>Documentation</h3>
          <ul className='flex flex-col gap-10 text-dark-gray text-2xl font-inter'>
            <li>
              <a
                href='#'
                className='hover:text-white duration-300'>
                Getting Started
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-white duration-300'>
                API Reference
              </a>
            </li>

            <li>
              {' '}
              <a
                href='#'
                className='hover:text-white duration-300'>
                Integrations
              </a>
            </li>
            <li>
              {' '}
              <a
                href='#'
                className='hover:text-white duration-300'>
                Examples
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-white duration-300'>
                SDKs
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='text-3xl text-[#FCFDFF] mb-10 font-inter'>Resources</h3>
          <ul className='flex flex-col gap-10 text-dark-gray text-2xl font-inter'>
            <li>
              <a
                href='#'
                className='hover:text-white duration-300'>
                Changelog
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-white duration-300'>
                Pricing
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-white duration-300'>
                Status
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-white duration-300'>
                Webhooks
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='text-3xl text-[#FCFDFF] mb-10 font-inter'>Company</h3>
          <ul className='flex flex-col gap-10 text-dark-gray text-2xl font-inter'>
            <li>
              <a
                href='#'
                className='hover:text-white duration-300'>
                Blog
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-white duration-300'>
                Contact
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-white duration-300'>
                Customers
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-white duration-300'>
                Brand
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='text-3xl text-[#FCFDFF] mb-10 font-inter'>Legal</h3>
          <ul className='flex flex-col gap-10 text-dark-gray text-2xl font-inter'>
            <li>
              <a
                href='#'
                className='hover:text-white duration-300'>
                Acceptable Use
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-white duration-300'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-white duration-300'>
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
