import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { UserData } from "./context/userContext";

const App = () => {
  const { loading, isAuth, user } = UserData();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isAuth ? <Home /> : <Login />} />
          <Route path="/login" element={isAuth ? <Home /> : <Login />} />
          <Route path="/register" element={isAuth ? <Home /> : <Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
