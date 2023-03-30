import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <h1>Layout</h1>
      <Link to="/collection/1">Item 1</Link>
      <Link to="/collection/2">Item 2</Link>
      <Link to="/collection/new">New Item</Link>
      <Outlet />
    </>
  );
}
