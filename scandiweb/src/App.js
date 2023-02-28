import './App.css';
import { Routes, Route } from "react-router-dom";
import Addproduct from "./pages/addproduct"
import Productlist from "./pages/productlist"

function App() {
  return (
    <Routes>
      <Route index element={<Productlist />} />
      <Route path="addproduct" element={<Addproduct />} />
    </Routes>
  );
}

export default App;
