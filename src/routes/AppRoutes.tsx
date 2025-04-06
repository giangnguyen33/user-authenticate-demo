import { Route, Routes } from "react-router";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default AppRoutes;
