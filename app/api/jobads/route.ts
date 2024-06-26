import { prisma } from "@/prisma/client"

export const revalidate = 60

export const GET = async () => {
  const jobAds = await prisma.jobAds.findMany({
    include: {
      category: true,
      tags: { include: { current_tag: true } },
      cooperation_type: true,
      company: {
        include: {
          city: { include: { province: true } },
          job_ads: true
        }
      }
    },
    orderBy: { created_at: "desc" }
  })

  return Response.json(jobAds)
}