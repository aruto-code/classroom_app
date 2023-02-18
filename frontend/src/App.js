import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/login";
import Home from "./screens/home";
import Signup from "./screens/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
