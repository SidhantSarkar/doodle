import prisma from '../lib/prisma'

export const getUserFromEmail = async (email: string) => {
    const user = await prisma.user.findFirst({
        where: {
            email: email
        }
    })
    return user
}