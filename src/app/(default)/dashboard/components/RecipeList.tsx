import action from "@/app/action";
import RecipeCard from "@/components/recipe-card";
import React, { HTMLProps } from "react";

async function getRecipes() {
  action();
  const response = await fetch(`${process.env.API_BASE_URL}/recipes`);
  const data = await response.json();
  if (!response.ok || data.error) {
    return [];
  }

  return data.data;
}

const RecipeList: React.FC<HTMLProps<HTMLDivElement>> = async ({
  className,
}) => {
  const recipes: Recipe[] = await getRecipes();

  return (
    <div className={`${className}`}>
      <h2 className="mb-4 font-bold text-3xl">Semua resep</h2>
      <div className="gap-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
        {recipes.map((recipe) => {
          return (
            <RecipeCard
              key={recipe.id}
              recipeName={recipe.name}
              category={recipe.RecipeCategory?.name}
              href={`/recipes/${recipe.name}`}
            />
          );
        })}
        <RecipeCard variant="add" href="/recipes/create" />
      </div>
    </div>
  );
};

export default RecipeList;
