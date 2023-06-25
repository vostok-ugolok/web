import "./App.css";
import Header from "./components/Header/Header.js";
import Feed from "./components/Feed/Feed";
import Info from "./components/Info/Info";
// import Menu from "./components/Menu/Menu";
// import CartPopUp from "./components/CartPopUp/CartPopUp";

function App() {
  return (
    <div>
      <Header />
      <Feed />
      <Info />
      {/* <CartPopUp/> */}
    </div>
  );
}

export default App;
