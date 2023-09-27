import { NextResponse } from 'next/server'
import { getServerSession } from "next-auth/next"
import options from "../../../auth/[...nextauth]/options"
import { getPermissionsFromDoodleId, getUniquePermissions, hasPermission } from '@/app/services/permissions'
import { getUserFromEmail } from '@/app/services/users'
import { deletePermission, upsertDoodlePermissions } from '@/app/services/doodles'

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(options)
    if (!session) {
        return NextResponse.json({ error: 'You must be signed in to access this.' }, { status: 401 })
    }

    const id = params.id
    if (!id) return NextResponse.json({ error: 'Missing doodle id.' }, { status: 400 })

    const permissions = await hasPermission(id, session.user?.email as string)

    if (!permissions.isAuthor && !(permissions.canEdit || permissions.canView)) return NextResponse.json({ error: 'You do not have permission to view sharing options.' }, { status: 403 })

    const permissionsList = await getPermissionsFromDoodleId(id)

    return NextResponse.json(permissionsList)
}

export async function POST(req: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(options)
    if (!session) {
        return NextResponse.json({ error: 'You must be signed in to access this.' }, { status: 401 })
    }

    const id = params.id
    if (!id) return NextResponse.json({ error: 'Missing doodle id.' }, { status: 400 })

    const permissions = await hasPermission(id, session.user?.email as string)

    if (!permissions.isAuthor) return NextResponse.json({ error: 'You do not have permission to edit sharing options.' }, { status: 403 })

    const { email, operation } = await req.json()

    if (operation !== 'VIEW' && operation !== 'EDIT') return NextResponse.json({ error: 'Invalid operation.' }, { status: 400 })

    const user = await getUserFromEmail(email)

    if (!user) return NextResponse.json({ error: 'User not found.' }, { status: 404 })

    const doodle = await upsertDoodlePermissions(id, user.id, operation)

    return NextResponse.json({ updated: doodle.permissions }, { status: 200 })
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(options)
    if (!session) {
        return NextResponse.json({ error: 'You must be signed in to access this.' }, { status: 401 })
    }

    const id = params.id
    if (!id) return NextResponse.json({ error: 'Missing doodle id.' }, { status: 400 })

    const permissions = await hasPermission(id, session.user?.email as string)

    if (!permissions.isAuthor) return NextResponse.json({ error: 'You do not have permission to edit sharing options.' }, { status: 403 })

    const { email } = await req.json()

    const user = await getUserFromEmail(email)

    if (!user) return NextResponse.json({ error: 'User not found.' }, { status: 404 })
    
    const permission = await getUniquePermissions(id, user.id)

    if (!permission) return NextResponse.json({ error: 'Permission not found.' }, { status: 404 })

    const doodle = await deletePermission(id, user.id)

    return NextResponse.json({ updated: doodle.permissions }, { status: 200 })
}