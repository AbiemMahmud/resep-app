"use client";
import { redirect, useRouter } from "next/navigation";
import React, { FormEvent, createRef, useRef } from "react";
import IngredientFields from "./IngredientFields";
import { Form } from "antd";

export interface IngredientField {
  name: string;
  amount: number;
}

const RecipeForm = () => {
  // Buat objek ref untuk field yang akan diisi
  const nameRef = useRef<HTMLInputElement>(null);

  // Ref ingredients akan diisi array objek IngredientField, inisiasi array kosong
  const ingredients = useRef<IngredientField[]>([]);

  // hook untuk navigasi ke halaman selanjutnya
  const router = useRouter();

  // submit handle
  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    console.log(nameRef.current?.value);
    console.log(ingredients.current);
  };

  // Fungsi untuk mengubah nilai field ingredients
  const changeIngredient = (index: number, name?: string, amount?: number) => {
    // Jika index di luar batas array ingredients, tambahkan objek baru
    if (!ingredients.current[index]) {
      ingredients.current[index] = { name: "", amount: 0 };
    }

    // Ubah nilai field ingredients
    if (name) ingredients.current[index].name = name;
    if (amount) ingredients.current[index].amount = amount;
  };

  // Fungsi untuk menghapus field ingredients
  const deleteIngredient = (index: number) => {
    ingredients.current.splice(index, 1);
  };

  return (
    <Form action="" className="mx-auto text-slate-700">
      <div className="mb-4">
        <label htmlFor="name" className="dark:text-slate-500">
          Recipe name:
        </label>
        <input
          ref={nameRef}
          type="text"
          placeholder="Enter category name"
          id="name"
          className="mt-2 px-2 py-1 rounded-sm w-full"
        />
      </div>
      <hr />
      <IngredientFields
        changeIngredient={changeIngredient}
        deleteIngredient={deleteIngredient}
      />
      <hr />
      <div className="flex gap-3 mt-4">
        <button
          onClick={(e) => submitForm(e)}
          className="border-slate-300 bg-green-500 px-3 py-2 border rounded-md font-semibold"
        >
          Add
        </button>
        <button
          onClick={(e) => console.log(e)}
          className="border-slate-300 bg-red-500 px-3 py-2 border rounded-md font-semibold text-white"
        >
          Back
        </button>
      </div>
    </Form>
  );
};

export default RecipeForm;
