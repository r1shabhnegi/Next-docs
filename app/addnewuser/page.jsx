'use client';
import { useState } from 'react';
const AddNewUser = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const addNewUserHandler = async () => {
    const res = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, age, email }),
    });
    const data = await res.json();
    if (data.ok) {
      alert('User successfully created');
    } else {
      alert('An error occurred while creating user account');
    }
  };

  return (
    <div>
      <input
        type='text'
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder='Please enter your name'
      />
      <br />
      <input
        type='number'
        onChange={(e) => setAge(e.target.value)}
        value={age}
        placeholder='Please enter your age'
      />
      <br />
      <input
        type='text'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder='Please enter your email'
      />
      <br />
      <button onClick={addNewUserHandler}>Add new user</button>
    </div>
  );
};
export default AddNewUser;
