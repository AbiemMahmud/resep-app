import React, { useRef } from "react";
import CategoryForm from "./components/CategoryForm";

const page = () => {
  return (
    <div className="flex justify-center">
      <div className="border-slate-200 p-4 border rounded-md w-full">
        <h2 className="mb-4 text-3xl text-center">Add Category</h2>
        <CategoryForm />
      </div>
    </div>
  );
};

export default page;
