import { cookies } from "next/headers"

import { verifyToken } from "@/utils/auth"
import { prisma } from "@/prisma/client"

export const dynamic = "force-dynamic"

export const GET = async (request: Request) => {
  const token = cookies().get("token")?.value || request.headers.get("Authorization") || ""
  const tokenPayLoad = verifyToken(token)

  if (!tokenPayLoad) return Response.json(null, { status: 403 })

  const company = await prisma.companies.findUnique({
    where: { email: tokenPayLoad.email },
    include: { city: { include: { province: true } } }
  })
  if (company) {
    return Response.json(company)
  }

  return Response.json(null, { status: 404 })
}