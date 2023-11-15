import { Routes, Route } from "react-router-dom";
import Login from "src/pages/auth/login/Login";
import Recovery from "src/pages/auth/recovery/Recovery";

export const AuthRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/*" element={<Login />} />
      </Routes>
    </>
  );
};
