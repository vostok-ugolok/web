import "./App.css";
import Header from "./components/Header/Header.js";
import Feed from "./components/Feed/Feed";
import Info from "./components/Info/Info";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div>
      <Header />
      {/* <Feed />
      <Info /> */}
      <Menu />
    </div>
  );
}

export default App;
