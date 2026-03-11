import { NavLink } from "react-router";

import { useSearchParams } from "react-router";

export default function About() {
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get("name");
  const age = searchParams.get("age");

  return (
    <>
      <h1 class="font-red-700">About</h1>

      <div>
        <span>{name}</span>
        <p>{age}</p>
      </div>
      <button>
        <NavLink to="/">Home</NavLink>
      </button>
    </>
  );
}
