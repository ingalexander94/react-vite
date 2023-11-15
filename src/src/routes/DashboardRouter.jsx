import { Routes, Route } from "react-router-dom";
import Home from "src/pages/dashboard/home/Home";
import Error404 from "src/pages/empty/Error404";

export const DashboardRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};
