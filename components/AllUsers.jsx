'use client';
import { List, ListItem, Card } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
const AllUsers = () => {
  const [users, setUSers] = useState('');

  useEffect(() => {
    const fetchAllUsers = async () => {
      const response = await fetch('api/users');
      const usersInfo = await response.json();
      setUSers(usersInfo.data);
    };
    fetchAllUsers();
  }, []);
  return (
    <div>
      {users &&
        users.map((user) => {
          <Card
            key={user.id}
            className='mb-4'>
            <List>
              <ListItem>{user.name}</ListItem>
            </List>
          </Card>;
        })}
    </div>
  );
};
export default AllUsers;
