import React from "react";
import ItemCards from "@/components/ItemCard";
import action from "@/app/action";

async function getRecipes() {
  action();
  const response = await fetch(`${process.env.API_BASE_URL}/recipes`);
  return response.json();
}

const Dashboard = async () => {
  const res = await getRecipes();
  console.log(res);
  return (
    <div>
      <ItemCards recipes={res.data} />
    </div>
  );
};

export default Dashboard;
