import "./App.css";
import Create from "./Components/Create";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
