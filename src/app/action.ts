"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export default async function action() {
  revalidatePath("/dashboard");
}
