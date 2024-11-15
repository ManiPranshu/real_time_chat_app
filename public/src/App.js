import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Chat from "./pages/Chat"
import SetAvatar from "./pages/SetAvatar"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Chat />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />


      
  
      </Routes>
    </BrowserRouter>
  );
}