import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import {BrowserRouter, Route, Routes,HashRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/tsk2">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
