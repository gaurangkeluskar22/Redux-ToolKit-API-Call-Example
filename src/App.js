import "./App.css";
import Create from "./Components/Create";
import Navbar from "./Components/Navbar";
import Read from './Components/Read';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/read" element={<Read/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
