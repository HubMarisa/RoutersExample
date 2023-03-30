import { Link, Route, Routes } from "react-router-dom";

// import About from "./components/About";
import Home from "./components/Home";
import Item from "./components/Item";
import Layout from "./components/Layout";
import Collection from "./components/Collection";
import NewItem from "./components/NewItem";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/collection" element={<h1>Random</h1>} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/collection">Collection</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/item/:id" element={<Item />} /> */}
        {/* <Route path="/layout" element={<Layout />} /> */}

        <Route path="/collection" element={<Layout />}>
          <Route index element={<Collection />} />
          <Route path=":id" element={<Item />} />
          <Route path="new" element={<NewItem />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Outlet /> */}
    </>
  );
}

export default App;
