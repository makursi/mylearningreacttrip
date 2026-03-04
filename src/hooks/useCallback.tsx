//这又又又又是一个用于优化的hook , 可以减少不必要的重新渲染, 好像说的useMemo 不是一样....
//useCallback 是用于缓存组件内的函数，避免函数的重复创建。
//参数依旧依旧是:

//回调函数
//依赖项数据, 当依赖项数组中的状态发生变化时,回调重新创建
import { useCallback, useState, type ChangeEvent } from "react";
const functionMap = new WeakMap();
let counter = 1;
export default function UseCallback() {
  console.log("Render App");

  const [search, setSearch] = useState("");
  //使用useCallback 进行优化,函数将不再重新创建, counter的值一直为 1

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      console.log("search状态改变了" + search);
    },
    [search],
  );

  if (!functionMap.has(handleChange)) {
    functionMap.set(handleChange, counter++);
  }

  console.log("函数id:", functionMap.get(handleChange));
  return (
    <>
      <input type="text" value={search} onChange={handleChange} />
    </>
  );
}
