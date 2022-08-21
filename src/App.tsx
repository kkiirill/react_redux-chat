import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { useAppSelector } from "./store";

const App: React.FC = () => {
  const user = useAppSelector((state) => state.user);
  return (
    <div className="app">
      {user.email ? (
        <Routes>
          (
          <Route path="/" element={<Home />} />)
        </Routes>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
