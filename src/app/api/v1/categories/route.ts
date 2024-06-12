import { prisma } from "@/tools/prisma";
import { zodCategory } from "@/tools/zodSchemas";
import { NextRequest, NextResponse } from "next/server";
import { ZodError, z } from "zod";

export async function GET() {
  const categories = await prisma.recipeCategory.findMany();
  return NextResponse.json({
    error: false,
    description: "Categories for recipes",
    data: categories,
  });
}

export async function POST(req: NextRequest) {
  let dataInput = await req.json();

  //   Validating and parsing using zod lib
  try {
    dataInput = zodCategory.parse(dataInput);
    const category = await prisma.recipeCategory.create({
      data: dataInput,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: true,
        messages: error.issues.map((issue: { path: any; message: any }) => {
          return {
            field: issue.path,
            cause: issue.message,
          };
        }),
      },
      {
        status: 400,
      }
    );
  }

  return NextResponse.json(
    {
      error: false,
      message: `${dataInput.name} is successfully added`,
    },
    { status: 200 }
  );
}
