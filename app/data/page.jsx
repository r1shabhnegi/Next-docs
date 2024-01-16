'use client';

import { useEffect, useState } from 'react';

const Data = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setProducts(data);
      console.log(data);
    }

    fetchData();
  }, []);

  return (
    <ul>
      {products?.map((p) => (
        <li
          className='border px-2 py-2'
          key={p.id}>
          {p.title}
        </li>
      ))}
    </ul>
  );
};
export default Data;
