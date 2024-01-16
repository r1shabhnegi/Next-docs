'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Navbar = () => {
  const pathname = usePathname();
  return (
    <div>
      {pathname !== '/login/loginadmin' ? (
        <li>
          <Link href='/login/loginadmin'>Login admin</Link>
        </li>
      ) : (
        <li>
          <Link href='/login/loginuser'>Login user</Link>
        </li>
      )}
    </div>
  );
};
export default Navbar;
