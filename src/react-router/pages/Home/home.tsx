import { NavLink } from "react-router";
export default function Home() {
  return (
    <>
      <h1 class="font-orange-400">Home</h1>

      <button>
        <NavLink to="/about">About</NavLink>
      </button>
    </>
  );
}
