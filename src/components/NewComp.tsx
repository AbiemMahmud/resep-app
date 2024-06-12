"use client";
import action from "@/app/action";
import React from "react";

const NewComp = () => {
  return <button onClick={() => action()}>destroy cache</button>;
};

export default NewComp;
