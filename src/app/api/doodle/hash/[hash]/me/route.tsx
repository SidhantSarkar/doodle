import { NextResponse } from 'next/server'
import { getServerSession } from "next-auth/next"
import options from "../../../../auth/[...nextauth]/options"
import { getMyDoodleFromHash } from '@/app/services/doodles'

export async function GET(req: Request, { params }: { params: { hash: string } }) {
    const session = await getServerSession(options)
    if (!session) {
        return NextResponse.json({ error: 'You must be signed in to access this.' }, { status: 401 })
    }

    const hash = params.hash
    if (!hash) return NextResponse.json({ error: 'No hash provided.' }, { status: 400 })

    const doodle = await getMyDoodleFromHash(hash, session.user?.email as string)

    if (!doodle) return NextResponse.json({ error: 'Doodle not found.' }, { status: 404 })

    return NextResponse.json(doodle)
}