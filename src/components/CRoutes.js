import { Routes, Route } from "react-router-dom";
import Item from "./components/Item";
import Collection from "./components/Collection";
import NewItem from "./components/NewItem";
import Layout from "./Layout";

export default function CRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Collection />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/collection/newitem" element={<NewItem />} />
      </Route>
    </Routes>
  );
}
