import { Link } from "react-router-dom";

export default function Collection() {
  return (
    <>
      <h1>Collection</h1>
      <Link to="/collection/item/1">Item 1</Link>
      <br />
      <Link to="/collection/item/2">Item 2</Link>
      <br />
      <Link to="/newitem">New Item</Link>
    </>
  );
}
