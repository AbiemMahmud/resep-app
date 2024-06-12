import { prisma } from "@/tools/prisma";

export async function GET() {
  const recipes = await prisma.recipe.findMany();
  return Response.json({
    error: false,
    message: "maho",
    description: "Fetch all recipes",
    data: recipes,
  });
}
