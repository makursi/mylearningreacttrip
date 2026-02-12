//useStatehook  使用
import { useState } from "react";

export default function useMyStateHook() {
  const [arr, setArr] = useState([1, 2, 3]);

  function handleClick() {
    const start: number = 0;
    const end: number = 2;

    //slice [) 包前不包后
    setArr([...arr.slice(start, end), 2.5, ...arr.slice(end)]);
  }
  return (
    <>
      <button onClick={handleClick}>add</button>
      <h1>{arr}</h1>
    </>
  );
}
