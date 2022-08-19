import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { useAppSelector } from "./store";

function App() {
  const user = useAppSelector((state) => state.user);
  return (
    <div className="app">
      <Routes>
        {user.email ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
