import { navLinks } from '../constants';
import Button from './Button';

export function NavBar() {
  return (
    <>
      <img
        src=''
        alt=''
      />
      <nav className='container flex flex-col justify-end md:flex-row md:px-20'>
        <ul className='flex items-center flex-col gap-12 lg:justify-between font-medium text-dark-gray text-lg'>
          {navLinks.map(navLink => (
            <li key={navLink.name}>
              <a href={navLink.href}>{navLink.name}</a>
            </li>
          ))}
        </ul>

        <div className='flex gap-2 flex-col lg:flex-row '>
          <Button name='Sign in' />
          <Button name='Get Started' />
        </div>
      </nav>

      <Button />
    </>
  );
}
