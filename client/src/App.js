import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import List from "./Pages/List/List";
import Single from "./Pages/Single/Single";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hotels" element={<List />} />
        <Route path="/hotel/:id" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
