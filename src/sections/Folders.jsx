import { folders } from '../constants';

function Folders() {
  return (
    <section className='container'>
      <h2 className='heading'>
        Reach humans, <br /> not spam folders
      </h2>

      <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-14 mt-20'>
        {folders.map(folder => (
          <li
            className=''
            key={folder.header}>
            <div className='mb-6'>
              <img
                src={folder.src}
                alt=''
                width={30}
              />
            </div>
            <h3 className='font-openSans text-[#FCFDFF] font-medium text-[2rem] md:text-[2.2rem] mb-2'> {folder.header}</h3>
            <p className='max-w-[55ch] text-dark-gray text-[1.86rem] leading-10'> {folder.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Folders;
