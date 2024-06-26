import {
  AppstoreOutlined,
  DashboardOutlined,
  MailOutlined,
  ProductOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import { BookOpen, BookOpenTextIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: <Link href={"/dashboard"}>Dashboard</Link>,
    key: "",
    icon: <DashboardOutlined />,
  },
  {
    label: <Link href={"/categories"}>Categories</Link>,
    key: "categories",
    icon: <AppstoreOutlined />,
  },
  {
    label: <Link href={"/dashboard/all"}>All</Link>,
    key: "all",
    icon: <ProductOutlined />,
  },
];

const Navigation = () => {
  const [current, setCurrent] = useState("");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      className="bg-transparent grow"
      theme="dark"
    />
  );
};

export default Navigation;
