'use client';

import { Input, Button } from '@material-tailwind/react';
import { useState } from 'react';
const DeleteUser = () => {
  const [id, setId] = useState('');

  const handleSubmit = async () => {
    e.preventDefault();
    if (!id) {
      alert('Please provide user id to delete the user');
      return;
    }

    try {
      const response = await fetch(`/api/users/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('User successfully deleted');
      } else {
        const data = await response.json();
        alert(data.result || 'somethings went wrong');
      }
    } catch (error) {}
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          label='User'
          type='text'
          placeholder='User Id '
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <Button
          className='mt-2'
          type='submit'>
          Delete User
        </Button>
      </form>
    </div>
  );
};
export default DeleteUser;
