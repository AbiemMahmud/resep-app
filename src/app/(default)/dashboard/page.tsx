import React from "react";
import action from "@/app/action";
import RecipeList from "./components/RecipeList";

const Dashboard = async () => {
  return (
    <div className="bg-gray-400 p-0 min-[425px]:p-4">
      <RecipeList className="bg-white p-2 sm:p-4 rounded-lg" />
    </div>
  );
};

export default Dashboard;
