import { use } from "react";
import "./card.css";
interface Data {
  id: number;
  address: string;
  name: string;
  age: number;
  avatar: string;
}

const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (await fetch("http://localhost:5173/data.json").then((res) =>
    res.json(),
  )) as { data: Data };
};

//获取异步promise对象
const dataPromise = getData();

const Card: React.FC = () => {
  const { data } = use(dataPromise);
  return (
    <div className="card">
      <header className="card-header">
        <div className="card-name">{data.name}</div>
        <div className="card-age">{data.age}</div>
      </header>
      <section className="card-content">
        <div className="card-address">{data.address}</div>
        <div className="card-avatar">
          <img width={50} height={50} src={data.avatar} alt="" />
        </div>
      </section>
    </div>
  );
};
export default Card;
