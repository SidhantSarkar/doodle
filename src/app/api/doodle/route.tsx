import { NextResponse } from 'next/server'
import { getServerSession } from "next-auth/next"
import options from "../auth/[...nextauth]/options"
import { getAllDoodlesFromContext } from '@/app/services/doodles'
 
export async function GET(request: Request) {
    const session = await getServerSession(options)
    if (!session) {
        return NextResponse.json({ error: 'You must be signed in to access this.' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const context = searchParams.get('context')

    const doodles = await getAllDoodlesFromContext(session.user?.email as string, context)

    return NextResponse.json(doodles)
}