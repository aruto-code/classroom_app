import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/login";
import Home from "./screens/home";
import Signup from "./screens/Signup";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/login" element={<Login />}> </Route>
        <Route path="/signup" element={<Signup />}> </Route>
      </Routes>
    </BrowserRouter>
  );
}