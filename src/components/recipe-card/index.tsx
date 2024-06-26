import { Card } from "antd";
import { Cake, Plus } from "lucide-react";
import Link from "next/link";
import React, { FC, HTMLProps } from "react";

interface RecipeCardProps extends HTMLProps<HTMLDivElement> {
  variant?: "default" | "add";
  recipeName?: string;
  category?: string;
}

const RecipeCard: FC<RecipeCardProps> = ({
  className,
  recipeName,
  category,
  variant = "default",
  href = "/",
}) => {
  return (
    <Link href={variant === "add" ? "/recipes/create" : href}>
      <Card
        className={className}
        cover={
          <div className="flex bg-blue-300 rounded-t-lg w-full h-36 center-this">
            {variant === "add" ? (
              <Plus className="text-blue-600 size-10" />
            ) : (
              <Cake className="text-blue-600 size-10" />
            )}
          </div>
        }
      >
        {variant === "add" ? (
          <h2>Add New Recipe</h2>
        ) : (
          <>
            <h2>{recipeName}</h2>
            {category && <p>{category}</p>}
          </>
        )}
      </Card>
    </Link>
  );
};

export default RecipeCard;
