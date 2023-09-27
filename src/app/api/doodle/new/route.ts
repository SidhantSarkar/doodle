import { NextResponse } from 'next/server'
import { getServerSession } from "next-auth/next"
import options from "../../auth/[...nextauth]/options"
import { upsertDoodle } from '@/app/services/doodles'

export async function POST(req: Request) {
    const session = await getServerSession(options)
    if (!session) {
        return NextResponse.json({ error: 'You must be signed in to access this.' }, { status: 401 })
    }

    const { data, siteUrl, siteHash, title } = await req.json()

    if (!data || !siteUrl || !siteHash || !title) {
        return NextResponse.json({ error: 'Missing data.' }, { status: 400 })
    }

    const doodle = await upsertDoodle({
        email: session.user?.email as string,
        data: data,
        siteUrl: siteUrl,
        siteHash: siteHash,
        title: title,
    })

    if (!doodle) return NextResponse.json({ error: 'Error creating doodle.' }, { status: 500 })

    return NextResponse.json({ created: doodle.id }, { status: 201 })
}