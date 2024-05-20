import { lineImg } from './assets';
import NavBar from './components/NavBar';
import Available from './sections/Available';
import Companies from './sections/Companies';
import Control from './sections/Control';
import DevelopEmails from './sections/DevelopEmails';
import Experience from './sections/Experience';
import Folders from './sections/Folders';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Integrate from './sections/Integrate';
import Testimonial from './sections/Testimonial';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <section className='padding-lg lg:px-10'>
          <Hero />
        </section>

        <section className='container pt-32 mb-14 flex justify-center'>
          <img
            src={lineImg}
            alt=''
            className='w-[85%] object-cover relative'
          />
        </section>

        <section className='padding-lg lg:px-10'>
          <Companies />
        </section>

        <section className='padding-lg'>
          <Integrate />
        </section>

        <section className='padding-lg'>
          <Experience />
        </section>

        <section className='padding-lg'>
          <DevelopEmails />
        </section>

        <section className='container pt-12 mb-14 flex justify-center'>
          <img
            src={lineImg}
            alt=''
            className='w-[85%] object-cover relative'
          />
        </section>

        <section className='padding-lg'>
          <Folders />
        </section>

        <section className='container pt-20 mb-14 flex justify-center'>
          <img
            src={lineImg}
            alt=''
            className='w-[85%] object-cover relative'
          />
        </section>

        <section className='padding-lg'>
          <Testimonial />
        </section>

        <section className='padding-lg padding-xl'>
          <Control />
        </section>

        <section className='padding-lg'>
          <Available />
        </section>

        <footer className='padding-lg'>
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default App;
