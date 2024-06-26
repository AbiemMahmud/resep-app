interface Recipe {
  id: number;
  name: string;
  description: string;
  categporyId?: number;
  RecipeCategory?: RecipeCategory;
}
