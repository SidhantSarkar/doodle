import { NextResponse } from 'next/server'
import { getServerSession } from "next-auth/next"
import options from "../../../auth/[...nextauth]/options"
import { hasPermission } from '@/app/services/permissions'
import { upsertDoodle } from '@/app/services/doodles'

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(options)
    if (!session) {
        return NextResponse.json({ error: 'You must be signed in to access this.' }, { status: 401 })
    }

    const id = params.id
    if (!id) return NextResponse.json({ error: 'Missing doodle id.' }, { status: 400 })

    const permissions = await hasPermission(id, session.user?.email as string)

    if (!permissions.isAuthor) return NextResponse.json({ error: 'You do not have permission to edit this doodle.' }, { status: 403 })

    const { isPublic, title } = await req.json()
    
    const doodle = await upsertDoodle({
        doodleId: id,
        title: title,
        isPublic: isPublic,
    })

    if (!doodle) return NextResponse.json({ error: 'Error updating doodle.' }, { status: 500 })

    return NextResponse.json({ updated: doodle.id }, { status: 200 })
}