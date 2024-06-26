import { Input, Space } from "antd";

const Search = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Space.Compact className={props.className}>
      <Input.Search placeholder="Search..." className="h-[32]" />
    </Space.Compact>
  );
};

export default Search;
