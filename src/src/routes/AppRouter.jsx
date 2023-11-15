import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "src/context/auth/auth.context";

import Error404 from "src/pages/empty/Error404";
import PublicRouter from "./PublicRouter";
import { AuthRouter } from "./AuthRouter";
import PrivateRouter from "./PrivateRouter";
import { DashboardRouter } from "./DashboardRouter";

export const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route
            path="login/*"
            element={
              <PublicRouter isAuth={user}>
                <Routes>
                  <Route path="/*" element={<AuthRouter />} />
                </Routes>
              </PublicRouter>
            }
          />
          <Route
            path="/*"
            element={
              <PrivateRouter isAuth={user}>
                <Routes>
                  <Route path="/*" element={<DashboardRouter />} />
                </Routes>
              </PrivateRouter>
            }
          />
          <Route path="404" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};
