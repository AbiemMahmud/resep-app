import React from "react";

const getcategories = async () => {
  const response = await fetch(`${process.env.API_BASE_URL}/categories`);
  return response.json();
};

const page = async () => {
  const cat = await getcategories();
  console.log(cat);
  return <div>page</div>;
};

export default page;
