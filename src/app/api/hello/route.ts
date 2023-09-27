import { NextResponse } from 'next/server';
import { getServerSession } from "next-auth/next"
import options from "../auth/[...nextauth]/options"

export async function GET() {
  const session = await getServerSession(options)
  if (session) {
    // Signed in
    return NextResponse.json({ text: 'Hello' });
  } else {
    // Not Signed in
    return NextResponse.json({ error: 'You must be signed in to access this.' }, { status: 401 });
  }
}