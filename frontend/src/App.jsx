import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AddNote from "./pages/AddNote";
import EditNote from "./pages/EditNote";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Signup />} />

        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/addnote" element={<AddNote />} />

        <Route path="/edit/:id" element={<EditNote />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;