import Logo from "@/components/Logo";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center bg-fuchsia-50 h-screen">
      <div className="">
        <h1 className="mb-4 text-3xl text-center">404</h1>
        <div>
          <Link href={"/"} className="text-blue-600 underline">
            Go to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
