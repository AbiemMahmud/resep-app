import { prisma } from "@/tools/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const recipes = await prisma.recipe.findMany({
    include: {
      RecipeCategory: true,
    },
  });
  return NextResponse.json({
    error: false,
    message: "Fetching successfully",
    description: "Fetch all recipes",
    data: recipes,
  });
}

export async function POST(req: NextRequest, res: NextResponse) {
  const a = await req.json();
  return NextResponse.json({
    data: a,
  });
}
