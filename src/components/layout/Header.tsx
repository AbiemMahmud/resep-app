"use client";

import React from "react";
import { Layout } from "antd";
import Search from "./Search";
import { JavaOutlined } from "@ant-design/icons";
import Navigation from "./Navigation";

const MainHeader = () => {
  return (
    <Layout.Header className="flex justify-between items-center gap-4 border-slate-200 px-2 md:px-[50px] border-b">
      <JavaOutlined className="bg-sky-950 p-2 rounded-lg grow-0 text-3xl text-amber-400" />
      <Search className="max-w-[300px] grow" />
      <Navigation />
    </Layout.Header>
  );
};
export default MainHeader;
