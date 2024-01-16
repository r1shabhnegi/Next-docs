import img from '../../public/img.jpg';
import Image from 'next/image';
const Users = () => {
  return (
    <div>
      <Image
        src={img}
        alt='image'
        width={700}
        height={700}
      />
      <Image
        src='https://images.unsplash.com/photo-1682686581312-506a8b53190e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='nature-img'
        width='1000'
        height='1000'
      />
    </div>
  );
};
export default Users;
