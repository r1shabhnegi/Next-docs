import Image from 'next/image';
import backgroundImage from '../../public/home/book-bg.jpg';
import Link from 'next/link';
import { SparklesIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <div className='flex flex-col relative justify-center items-center h-screen'>
      <Image
        className='blur-sm'
        src={backgroundImage}
        alt='Background Image'
        fill
        sizes='100vw'
        style={{ objectFit: 'cover' }}
      />
      <div className='z-10 flex flex-col justify-center items-center bg-purple-100 rounded-md p-2 lg:w-2/5 h-1/4'>
        <div className='flex pb-5 mb-5 text-5xl text-purple-800'>
          <SparklesIcon className='h-12 w-12' />
          <p>Litloop</p>
        </div>
        <div>
          <Link
            href='/store'
            className='bg-purple-700 text-white rounded-sm p-2'>
            Take me to the Store
          </Link>
        </div>
      </div>
    </div>
  );
}
