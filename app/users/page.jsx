import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: '500' });

const Users = () => {
  return (
    <div>
      <h1>Google fonts</h1>
      <h2 className={poppins.className}>Hello this is a poppins</h2>
    </div>
  );
};
export default Users;
