import { Layout } from "antd";
import Header from "./Header";

const MainLayout = (props: React.HTMLProps<HTMLDivElement>) => {
  return (
    <Layout className={props.className}>
      <Header />
      {props.children}
    </Layout>
  );
};

export default MainLayout;
