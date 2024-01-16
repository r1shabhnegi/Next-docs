'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const Home = () => {
  const router = useRouter();

  const navigate = (page) => {
    router.push(page);
  };
  return (
    <section>
      <h1>useRouter</h1>
      <Link href='/project'>Projects</Link>
      <button
        className='border px-2 py-4'
        // onClick={() => router.push('about')}
        onClick={() => navigate('about')}>
        Go to about page
      </button>
      <br />
      <br />
      <button
        className='border px-2 py-4'
        // onClick={() => router.push('about')}
        onClick={() => navigate('login')}>
        Go to Login page
      </button>
    </section>
  );
};
export default Home;
