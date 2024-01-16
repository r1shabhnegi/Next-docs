import { stat } from '@babel/core/lib/gensync-utils/fs';
import { NextResponse } from 'next/server';
export async function POST(req, res) {
  let { email, password } = await req.json();
  console.log(email, password);

  if (!email || !password) {
    return NextResponse.json(
      { error: 'request filled not found' },
      { status: 404 }
    );
  }

  return NextResponse.json({ res: 'data send successfully' });
}
