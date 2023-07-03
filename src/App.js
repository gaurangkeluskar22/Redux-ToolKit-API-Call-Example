import "./App.css";
import Create from "./Components/Create";
import Navbar from "./Components/Navbar";
import Read from './Components/Read';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Update from "./Components/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exect path="/" element={<Create />} />
          <Route exect path="/read" element={<Read/>} />
          <Route exect path="/edit/:id" element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
