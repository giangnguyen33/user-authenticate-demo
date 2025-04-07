import { Route, Routes } from "react-router";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import Welcome from "../pages/Welcome";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route element={<PrivateRoute />}>
        <Route path="/welcome" element={<Welcome />}></Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
