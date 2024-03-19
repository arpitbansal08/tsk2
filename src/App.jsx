import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { Route, Routes,HashRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
