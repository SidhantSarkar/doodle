import prisma from '../lib/prisma'

export const hasPermission = async (id: string, email: string) => {
    let query: any = await prisma.doodle.findFirst({
        where: {
            id: id,
            author: {
                email: email
            }
        },
    });
    const isAuthor = query ? true : false;

    query = await prisma.doodle.findFirst({
        where: {
            id: id,
            isPublic: true
        }
    });
    const isPublic = query ? true : false;

    let canEdit = false, canView = false;
    query = await prisma.permissions.findFirst({
        where: {
            doodle: {
                id: id
            },
            user: {
                email: email
            },
        }
    });
    if (query) {
        canEdit = query.operation === 'EDIT';
        canView = query.operation === 'VIEW';
    }

    return {
        isAuthor,
        isPublic,
        canEdit,
        canView
    }
}

export const getUniquePermissions = async (doodleId: string, userId: string) => {
    const permission = await prisma.permissions.findUnique({
        where: {
            userId_doodleId: {
                userId: userId,
                doodleId: doodleId
            }
        }
    })
    return permission
}

export const getPermissionsFromDoodleId = async (id: string) => {
    const permissions = await prisma.permissions.findMany({
        where: {
            doodle: {
                id: id
            }
        },
        include: {
            user: {
                select: {
                    email: true,
                    name: true,
                    image: true
                }
            }
        }
    })
    return permissions
}