import "./App.css";

import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <h2 className="App">Welcome to React Router</h2>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
