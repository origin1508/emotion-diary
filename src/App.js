import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Diary from "./pages/Diary";
import Edit from "./pages/Diary";
import Home from "./pages/Home";
import New from "./pages/Diary";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>App.js</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/diary">Diary</Link>
        </li>
        <li>
          <Link to="/new">New</Link>
        </li>
        <li>
          <Link to="/edit">Edit</Link>
        </li>
      </ul>
    </BrowserRouter>
  );
}

export default App;
