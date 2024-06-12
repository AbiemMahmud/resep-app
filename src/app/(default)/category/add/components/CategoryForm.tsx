"use client";
import { redirect, useRouter } from "next/navigation";
import React, { FormEvent, createRef } from "react";

const CategoryForm = () => {
  const name = createRef<HTMLInputElement>();
  const router = useRouter();

  const formHandle = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.current) return;
    const res = await fetch(`http://localhost:3000/api/v1/categories`, {
      method: "POST",
      headers: {
        "content-type": "appilcation/json",
      },
      body: JSON.stringify({
        name: name.current.value,
      }),
    });

    if (res.ok) {
      router.push("/categories");
    }
  };

  return (
    <form action="" className="mx-auto text-slate-700">
      <div className="mb-4">
        <label htmlFor="name" className="dark:text-slate-500">
          Category name:
        </label>
        <input
          ref={name}
          type="text"
          placeholder="Enter category name"
          id="name"
          className="mt-2 px-2 py-1 rounded-sm w-full"
        />
      </div>
      <div className="flex gap-3">
        <button
          onClick={(e) => formHandle(e)}
          className="border-slate-300 bg-green-500 px-3 py-2 border rounded-md font-semibold"
        >
          Add
        </button>
        <button
          onClick={(e) => formHandle(e)}
          className="border-slate-300 bg-red-500 px-3 py-2 border rounded-md font-semibold text-white"
        >
          Back
        </button>
      </div>
    </form>
  );
};

export default CategoryForm;
