import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Feed from "./components/Feed/Feed";
import Info from "./components/Info/Info";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="" element={<Feed />} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="*" element={<h1>not found</h1>} />
      </Routes>
      <Info />

      {/* <CartPopUp/> */}
    </div>
  );
}

export default App;
