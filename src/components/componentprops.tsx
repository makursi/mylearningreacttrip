//父辈组件
import React from "react";
interface Props {
  id: number;
  name: string;
  arr: number[];
}
export default function ComponentProps() {
  //子辈组件
  //React.FC<Props> 是 “Function Component” 的 TypeScript 类型别名，全称是 React.FunctionComponent<Props>。
  const Son: React.FC<Props> = ({ name = "李狗蛋", id, arr }) => {
    return (
      <>
        <ul>
          <li>{name}</li>
          <li>{id}</li>
          <li>{arr}</li>
        </ul>
      </>
    );
  };

  return (
    <>
      <Son id={1} arr={[1, 2, 3]}></Son>
    </>
  );
}
