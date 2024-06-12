import { Cake, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const ItemCards = ({ recipes }: { recipes: recipe[] }) => {
  return (
    <>
      <h2 className="mb-2 text-3xl">All Recipes</h2>
      <div className="gap-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 dark:bg-slate-950 h-max">
        {recipes.map((recipe) => {
          return <ItemCard recipe={recipe} key={recipe.id} />;
        })}
        <AddCard />
      </div>
    </>
  );
};

const ItemCard = ({ recipe }: { recipe: recipe }) => {
  return (
    <div className="flex flex-col justify-end border-slate-300 border rounded-md w-full h-[180px]">
      <div className="flex justify-center items-center bg-fuchsia-100 w-full h-full">
        <Cake size={64} className="stroke-fuchsia-700" />
      </div>
      <h2 className="p-4">{recipe.name}</h2>
    </div>
  );
};
const AddCard = () => {
  return (
    <Link href={"/recipes/add"}>
      <div className="flex justify-center items-center border-slate-300 border rounded-md w-full h-[180px]">
        <div className="flex justify-center items-center bg-fuchsia-100 rounded-full w-16 h-16">
          <Plus size={32} className="stroke-fuchsia-700" />
        </div>
      </div>
    </Link>
  );
};

export default ItemCards;
