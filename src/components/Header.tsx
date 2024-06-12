import React, { ReactNode } from "react";
import Logo from "./Logo";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import { PopOver, PopOverContent, PopOverTrigger } from "./PopOver";

const Header = () => {
  return (
    <header>
      <div className="top-0 z-10 fixed flex justify-between items-center border-gray-300 bg-slate-50 dark:bg-slate-950 p-4 border-b w-full h-[72px]">
        <div className="flex items-center gap-4">
          <div>
            <Link href={"/"}>
              <Logo
                className="size-8"
                fillClass="fill-slate-950 dark:fill-slate-50"
              />
            </Link>
          </div>
          <h2 className="md:block hidden font-bold text-2xl dark:text-slate-50">
            Recipe IO
          </h2>
        </div>
        <div className="">
          <form action="" className="flex items-center">
            <input
              type="text"
              placeholder="search"
              className="block bg-slate-100 px-2 py-1 border rounded-s-md w-40 md:w-64 text-slate-700"
            />
            <button className="bg-slate-100 p-1 border rounded-e-md">
              <Search className="stroke-slate-500" />
            </button>
          </form>
        </div>
        <PopOver>
          <PopOverTrigger>
            <div className="border-slate-200 p-1 border rounded-md cursor-pointer">
              <Menu />
            </div>
          </PopOverTrigger>
          <PopOverContent>
            <div className="">
              <ul>
                <ListItemMenu href="/category/add">Add category</ListItemMenu>
                <ListItemMenu href="/categories">
                  See all the categories
                </ListItemMenu>
                <ListItemMenu href="/recipes">Recipes</ListItemMenu>
              </ul>
            </div>
          </PopOverContent>
        </PopOver>
      </div>
    </header>
  );
};

function ListItemMenu({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block border-slate-200 hover:dark:bg-slate-800 px-2 pt-2 pb-1 border-b last:border-b-0 first:rounded-t-md last:rounded-b-md"
    >
      <li className="">{children}</li>
    </Link>
  );
}

export default Header;
