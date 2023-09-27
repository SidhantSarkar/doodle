import prisma from '../lib/prisma'
import { Doodle } from '@prisma/client'

export const getDoodleFromId = async (id: string, email: string) => {
    const doodle = await prisma.doodle.findUnique({
        where: { 
            id: id,
            OR: [
                    {
                        author: {
                            email: email
                        }
                    },
                    {
                        isPublic: true
                    },
                    {
                        permissions: {
                            some: {
                                user: {
                                    email: email
                                }
                            }
                        }
                    }
                ]
        },
        include: {
            permissions: {
                select: {
                    operation: true,
                    user: {
                        select: {
                            email: true,
                        }
                    }
                }
            },
            author: {
                select: {
                    email: true,
                    name: true,
                    image: true
                }
            }
        }
    })
    return doodle
}

export const getDoodleFromHash = async (siteHash: string, email: string) => {
    const doodle = await prisma.doodle.findMany({
        where: { 
            AND: {
                siteHash: siteHash,
                OR: [
                        {
                            author: {
                                email: email
                            }
                        },
                        {
                            isPublic: true
                        },
                        {
                            permissions: {
                                some: {
                                    user: {
                                        email: email
                                    }
                                }
                            }
                        }
                ]
            }
        },
        select: {
            data: false,
            title: true,
            id: true,
            author: {
                select: {
                    email: true,
                    name: true,
                }
            },
            isPublic: true,
            permissions: {
                select: {
                    user: {
                        select: {
                            email: true,
                            name: true,
                        }
                    }
                }
            },
        }
    })

    return doodle
}

export const getMyDoodleFromHash = async (siteHash: string, email: string) => {
    const doodle = await prisma.doodle.findFirst({
        where: {
            siteHash: siteHash,
            author: {
                email: email
            }
        },
        include: {
            author: {
                select: {
                    email: true,
                    name: true,
                    image: true
                }
            }
        }
    })

    return doodle
}

export const getAllDoodlesFromContext = async (email:string, context: string | null) => {
    let doodles: Doodle[] = []
    if (context === 'my-doodles') {
        doodles = await prisma.doodle
            .findMany({ where: { author: { is: { email : email } } } })
    } else if (context === 'shared-with-me') {
        doodles = await prisma.doodle
            .findMany({ where: { permissions: { some: { user: { email : email} } } } })
    } else if (context === 'public') {
        doodles = await prisma.doodle
            .findMany({ where: { isPublic: true } })
    }

    return doodles
}

export const upsertDoodle = async (
        {
            doodleId = undefined,
            email = undefined,
            data = undefined,
            siteUrl = undefined,
            siteHash = undefined,
            title = undefined,
            isPublic = undefined
        }: any
    ) => {
    let authorId_siteHash: any = undefined
    if (!doodleId && (email && siteHash)) {
        const user = await prisma.user.findUnique({
            where: { email: email }
        })
        authorId_siteHash = {
            authorId: user?.id as string,
            siteHash: siteHash as string
        }
    }

    const doodle: Doodle = await prisma.doodle.upsert({
        where: {
            id: doodleId,
            authorId_siteHash: authorId_siteHash
        },
        update: {
            data: data,
            siteUrl: siteUrl,
            title: title,
            siteHash: siteHash,
            isPublic: isPublic
        },
        create: {
            data: data ? data : {},
            siteUrl: siteUrl ? siteUrl : '',
            title: title,
            siteHash: siteHash ? siteHash : '',
            isPublic: isPublic ? isPublic : false,
            author: { connect: { email: email ? email : '' } }
        },
    })

    return doodle
}

export const deleteDoodle = async (id: string) => {
    const doodle = await prisma.doodle.delete({
        where: { id: id },
    })
    return doodle
}

export const upsertDoodlePermissions = async (id: string, userId: string, operation: 'VIEW'|'EDIT') => {
    const doodle = await prisma.doodle.update({
        where: {
            id: id,
        },
        data: {
            permissions: {
                upsert: {
                    where: {
                        userId_doodleId: {
                            userId: userId,
                            doodleId: id
                        }
                    },
                    update: {
                        operation: operation
                    },
                    create: {
                        user: {
                            connect: {
                                id: userId
                            }
                        },
                        operation: operation 
                    }
                }
            }
        },
        include: {
            permissions: true
        }
    })
    return doodle
}

export const deletePermission = async (doodleIdid: string, userId: string) => {
    const doodle = await prisma.doodle.update({
        where: {
            id: doodleIdid,
        },
        data: {
            permissions: {
                delete: {
                    userId_doodleId: {
                        userId: userId,
                        doodleId: doodleIdid
                    }
                }
            }
        },
        include: {
            permissions: true
        }
    })
    return doodle
}