import { PopOver, PopOverContent, PopOverTrigger } from "@/components/PopOver";
import React from "react";

const page = () => {
  return (
    <div>
      <PopOver>
        <PopOverTrigger>Click me</PopOverTrigger>
        <PopOverContent>This is content</PopOverContent>
      </PopOver>
    </div>
  );
};

export default page;
