import { users } from '@/app/util/db';
import { NextResponse } from 'next/server';
import fs from 'fs';
// 2.Get specific user

export async function GET(_, res) {
  const { id } = await res.params;
  const user = users.filter((u) => u.id === id);
  return NextResponse.json({ user, ok: true });
}

// 3. Login

export async function POST(req, res) {
  let { name, email, password } = await req.json();
  const { id } = await res.params;

  const {
    name: uName,
    email: uEmail,
    password: uPassword,
  } = users.find((u) => u.id === id);

  if (uName === name && uEmail === email && uPassword === password) {
    return NextResponse.json({ result: 'Successfully logged in' });
  } else if (!name || !email || !password) {
    return NextResponse.json({ result: 'Please fill all the input fields' });
  } else {
    return NextResponse.json({ result: 'INVALID USER' });
  }
}

// 6. delete

export async function DELETE(req, res) {
  const { id } = await res.params;

  // Find the index of the user to delete in the users array
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1) {
    return NextResponse.json({ result: 'user not found' }, { status: 404 });
  }

  users.splice(userIndex, 1);

  // Extract just the user array from the updated data

  const updatedUsersArray = users;

  // convert the users array to a JSON string

  const updatedData = JSON.stringify(updatedUsersArray, null, 2);

  //Write the updated users array to a json string
  fs.writeFileSync(
    './app/util/db.js',
    `export const users = ${updatedData}`,
    'utf-8'
  );
  return NextResponse.json({ success: ' users successfully Deleted' });
}
