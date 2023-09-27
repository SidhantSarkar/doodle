import { NextResponse } from 'next/server'
import { getServerSession } from "next-auth/next"
import options from "../../auth/[...nextauth]/options"
import { deleteDoodle, getDoodleFromId, upsertDoodle } from '@/app/services/doodles'
import { hasPermission } from '@/app/services/permissions'

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(options)
    if (!session) {
        return NextResponse.json({ error: 'You must be signed in to access this.' }, { status: 401 })
    }

    const id = params.id
    if (!id) return NextResponse.json({ error: 'Missing doodle id.' }, { status: 400 })

    const doodle = await getDoodleFromId(id, session.user?.email as string)

    if (!doodle) return NextResponse.json({ error: 'Doodle not found.' }, { status: 404 })
    
    return NextResponse.json(doodle)
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(options)
    if (!session) {
        return NextResponse.json({ error: 'You must be signed in to access this.' }, { status: 401 })
    }

    const id = params.id
    if (!id) return NextResponse.json({ error: 'Missing doodle id.' }, { status: 400 })

    const permissions = await hasPermission(id, session.user?.email as string)

    if (!permissions.isAuthor && !permissions.canEdit) return NextResponse.json({ error: 'You do not have permission to edit this doodle.' }, { status: 403 })

    const { data } = await req.json()

    const doodle = await upsertDoodle({
        doodleId: id,
        data: data,
    })
    
    if (!doodle) return NextResponse.json({ error: 'Error updating doodle.' }, { status: 500 })

    return NextResponse.json({ updated: doodle.id }, { status: 200 })
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(options)
    if (!session) {
        return NextResponse.json({ error: 'You must be signed in to access this.' }, { status: 401 })
    }

    const id = params.id
    if (!id) return NextResponse.json({ error: 'Missing doodle id.' }, { status: 400 })

    const permissions = await hasPermission(id, session.user?.email as string)

    if (!permissions.isAuthor) return NextResponse.json({ error: 'You do not have permission to delete this doodle.' }, { status: 403 })

    const doodle = await deleteDoodle(id)

    return NextResponse.json({ deleted: doodle.id }, { status: 200 })
}
