import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    </BrowserRouter>
  );
}

export default App;
