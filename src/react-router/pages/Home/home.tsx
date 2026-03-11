import { NavLink } from "react-router";
import { useParams } from "react-router";
import { Card } from "antd";
export default function Home() {
  const { id } = useParams();

  return (
    <>
      <Card>
        <h1 class="font-orange-400">Home {id} </h1>

        <button>
          <NavLink to="/about">About</NavLink>
        </button>
      </Card>
    </>
  );
}
