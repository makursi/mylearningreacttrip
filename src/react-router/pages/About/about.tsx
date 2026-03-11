import { NavLink } from "react-router";

export default function About() {
  return (
    <>
      <h1 class="font-red-700">About</h1>

      <button>
        <NavLink to="/">Home</NavLink>
      </button>
    </>
  );
}
