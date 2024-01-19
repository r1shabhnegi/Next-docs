import { users } from '@/app/util/db';
import { NextResponse } from 'next/server';
import fs from 'fs';
// 1. All users data

export function GET() {
  const data = users;
  return NextResponse.json({ data }, { status: 200 });
}

// 4. Create User

export async function POST(req, res) {
  let { id, name, email, password } = await req.json();

  if (!id || !name || !email || !password) {
    return NextResponse.json(
      { result: 'requested field not found' },
      { status: 400 }
    );
  } else {
    // Add the new user in the memory array
    users.push({ id, name, email, password });
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
    return NextResponse.json({ success: ' users successfully created' });
  }
}

// 5. Update user

export async function PUT(req, res) {
  let { id, name, email, password } = await req.json();
  // Find the users in the users array by ID

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return NextResponse.json({ result: 'User not found' });
  }

  if (name) {
    users[userIndex].name = name;
  }
  if (email) {
    users[userIndex].email = email;
  }
  if (password) {
    users[userIndex].password = password;
  }

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
  return NextResponse.json({ success: ' users successfully Updated' });
}
