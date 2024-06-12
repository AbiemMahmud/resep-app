import { PopOver, PopOverContent, PopOverTrigger } from "@/components/PopOver";
import React from "react";

function page() {
  return (
    <PopOver>
      <PopOverTrigger>vv</PopOverTrigger>
      <PopOverContent>content</PopOverContent>
    </PopOver>
  );
}

export default page;
