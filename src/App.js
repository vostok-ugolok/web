import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Menu from "./components/Menu/Menu";
import MainScreen from "./components/Feed/MainScreen";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<MainScreen />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<h1>не найдено</h1>} />
      </Routes>

      {/* <CartPopUp/> */}
    </>
  );
}

export default App;
