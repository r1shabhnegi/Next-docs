import { stat } from '@babel/core/lib/gensync-utils/fs';
import { NextResponse } from 'next/server';
export async function POST(req, res) {
  let { name, age, email } = await req.json();
  if (!name || !age || !email) {
    return NextResponse(
      { error: 'request filled not found', ok: false },
      { status: 404 }
    );
  }
  return NextResponse.json(
    { res: 'Credentials verified, User successfully logged in', ok: true },
    { status: 200 }
  );
}
