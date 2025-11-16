import { prisma } from "@/lib/prisma"

export const getCardAchievements = async () => {
  const user = await prisma.user.findUnique({
    where: { email: 'akmalrbc6@gmail.com' },
    include: {
      achievements: {
        select: {
          id: true,
          title: true,
          url: true,
          publisher: true,
          issuedOn: true,
        }
      }
    }
  })

  const userAchievements = user?.achievements || []

  if (!user) {
    throw new Error('User not found');  // Atau return empty + log
  }


  return { userAchievements }
}