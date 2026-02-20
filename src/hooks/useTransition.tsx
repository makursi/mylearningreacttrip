import { useState, useTransition } from "react";
import { Input, Flex, List } from "antd";

interface Item {
  id: number;
  name: string;
  address: string;
}

export default function UseTransition() {
  const [inputValue, setInputValue] = useState("");
  const [isPending, startTransition] = useTransition();
  const [list, setList] = useState<Item[]>([]);

  // 处理用户输入的值
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setInputValue(value);

    //通过用户输入的值去发送请求, useTransition hook会进行过渡,显示isPending

    fetch(`/api/list?keyWord=${value}`)
      .then((res) => res.json())
      .then((data) => {
        const res = data?.list ?? [];

        startTransition(() => {
          setList([...res]);
        });
      });
  }

  return (
    <>
      <Flex>
        <Input
          value={inputValue}
          onChange={handleInputChange} // 实时更新
          placeholder="请输入姓名"
        />
      </Flex>
      ;{isPending && <div>loading...</div>}
      {/* 列表渲染 */}
      <List
        dataSource={list}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta title={item.name} description={item.address} />
          </List.Item>
        )}
      />
      ;
    </>
  );
}
